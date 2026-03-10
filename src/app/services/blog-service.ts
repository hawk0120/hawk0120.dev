import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

export type BlockType = 'paragraph' | 'heading1' | 'heading2' | 'heading3' | 'code' | 'blockquote' | 'unorderedList' | 'orderedList';

export interface LeafletBlock {
  plaintext?: string;
  imageUrl?: string;
  alt?: string;
  type?: BlockType;
}

export interface LeafletPage {
  blocks: LeafletBlock[];
}

export interface LeafletDocument {
  id: string;
  title: string;
  author: string;
  description: string;
  publishedAt: string;
  pages: LeafletPage[];
}

@Injectable({ providedIn: 'root' })


export class BlogService {
  private documents$ = new BehaviorSubject<LeafletDocument[] | null>(null);
  private listUrl = 'https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=did:plc:da6iyhwpub7pnqbj5booh2by&collection=site.standard.document';
  private did = 'did:plc:da6iyhwpub7pnqbj5booh2by';

  constructor(private http: HttpClient) {}
  fetchDocuments(): Observable<LeafletDocument[]> {
    return this.http.get<any>(this.listUrl).pipe(
      map((res) => this.transformStandardRecords(res)),
      map((docs) => docs.sort((a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )),
      tap((docs: LeafletDocument[]) => this.documents$.next(docs))
    );
  }

  private transformStandardRecords(res: any): LeafletDocument[] {
    return res.records.map((record: any) => {
      const pages: LeafletPage[] = [];

      if (record.value.content?.pages) {
        for (const p of record.value.content.pages) {
          const blocks: LeafletBlock[] = p.blocks?.map((b: any) => {
            const block: LeafletBlock = {};
            if (b.block?.plaintext) {
              block.plaintext = b.block.plaintext;
              block.type = this.detectBlockType(b.block.plaintext);
            }
            if (b.block?.image?.ref?.$link) {
              block.imageUrl = this.buildBlobUrl(this.did, b.block.image.ref.$link);
              block.alt = b.block.image.alt || '';
            }
            return block;
          }) || [];
          pages.push({ blocks });
        }
      }

      return {
        id: record.uri,
        title: record.value.title,
        author: 'Brady Hawkins',
        description: record.value.description || '',
        publishedAt: record.value.publishedAt,
        pages,
      };
    });
  }

  getDocuments(): Observable<LeafletDocument[] | null> {
    return this.documents$.asObservable();
  }

  getDocumentById(id: string): LeafletDocument | undefined {
    return this.documents$.value?.find((doc: LeafletDocument) => doc.id === id);
  }

  private buildBlobUrl(did: string, cid: string): string {
    const url = `https://bsky.social/xrpc/com.atproto.sync.getBlob?did=${did}&cid=${cid}`;
    console.log('Blob URL:', url);
    return url;
  }

  private detectBlockType(text: string): BlockType {
    const trimmed = text.trim();
    if (trimmed.startsWith('# ')) return 'heading1';
    if (trimmed.startsWith('## ')) return 'heading2';
    if (trimmed.startsWith('### ')) return 'heading3';
    if (trimmed.startsWith('```') || trimmed.startsWith('    ')) return 'code';
    if (trimmed.startsWith('> ')) return 'blockquote';
    if (/^[-*] /.test(trimmed)) return 'unorderedList';
    if (/^\d+\. /.test(trimmed)) return 'orderedList';
    return 'paragraph';
  }

}
