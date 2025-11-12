import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BlogService, LeafletDocument } from '../../services/blog-service';

@Component({
  selector: 'app-post',
  imports: [ CommonModule ],
  templateUrl: './post.html',
  styleUrl: './post.scss'
})

export class PostComponent implements OnInit {
  post: LeafletDocument | undefined;

  constructor(private route: ActivatedRoute, private service: BlogService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.post = this.service.getDocumentById(id);
  }
}

