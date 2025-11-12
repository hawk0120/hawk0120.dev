import { NgModule, Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'
import { BlogService, LeafletDocument } from '../../services/blog-service';

@Component({
  selector: 'app-blog',
  imports: [ CommonModule, RouterLink ],
  standalone: true,
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})

export class BlogComponent implements OnInit {
  documents: LeafletDocument[] = [];
  loading = true;

  constructor(private blogService : BlogService) {}

  ngOnInit(): void {
    this.blogService.fetchDocuments().subscribe((docs) => {
      this.documents = docs.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
      this.loading = false;
    });
  }}
