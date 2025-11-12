import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

export interface LeafletBlock {
  plaintext?: string;
  imageUrl?: string;
  alt?: string;
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
  private listUrl = 'https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=did:plc:da6iyhwpub7pnqbj5booh2by&collection=pub.leaflet.document';

  constructor(private http: HttpClient) {}
fetchDocuments(): Observable<LeafletDocument[]> {
    return this.http.get<any>(this.listUrl).pipe(
      map((res) =>
        res.records.map((record: any) => ({
          id: record.uri,
          title: record.value.title,
          author: record.value.author,
          description: record.value.description,
          publishedAt: record.value.publishedAt,
          pages: record.value.pages.map((p: any) => ({
            blocks: p.blocks.map((b: any) => {
              const block: LeafletBlock = {};
              if (b.block.plaintext) {
                block.plaintext = b.block.plaintext;
              }
              if (b.block.image?.ref?.$link) {
                block.imageUrl = this.buildBlobUrl(record.value.author, b.block.image.ref.$link);
                block.alt = b.block.image.alt || '';
              }
              return block;
            }),
          })),
        }))
      ),
      tap((docs: LeafletDocument[]) => this.documents$.next(docs))
    );
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

}
