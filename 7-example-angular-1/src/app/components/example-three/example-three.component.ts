import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { CrubService } from 'src/app/services/crub/crub.service';

@Component({
  selector: 'app-example-three',
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.css']
})
export class ExampleThreeComponent implements OnInit {
  
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  crubServices
  listPosts: Post[] = []

  constructor(crubServices: CrubService) { 
    this.crubServices = crubServices;
  }
  
  ngOnInit(): void {
    this.crubServices.getPosts(this.url).subscribe(res => this.listPosts = res)
  }

  createPost() {
    this.crubServices.createPost(this.url, {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }).subscribe(res => console.log(res))
  }

  updatePost(id: number) {
    this.crubServices.updatePost(`${this.url}/${id}`, {
      title: 'foo 11',
      body: 'bar 11',
      userId: 1,
    }).subscribe(res => console.log(res))
  }

  deletePost(id: number) {
    this.crubServices.deletePost(`${this.url}/${id}`).subscribe(res => console.log(res))
  }
  
}
