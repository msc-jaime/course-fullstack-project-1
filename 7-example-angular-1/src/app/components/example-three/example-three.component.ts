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

  createPots() {
    this.crubServices.createPost(this.url).subscribe(res => console.log(res))
  }

  updatePots(){
    this.crubServices.update(`${this.url}/1`  )
      .subscribe(res => console.log(res))
  }

  delete(){
    this.crubServices.deletePost(`${this.url}/1`  )
      .subscribe(res => console.log(res))
  }
  
}
