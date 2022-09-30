import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from 'src/app/interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class CrubService {

  httpClient

  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient
  }

  getPosts(url: string) {
    return this.httpClient.get<Post[]>(url)
  }

  createPost(url: string, body: object) {
    return this.httpClient.post(url, body)
  }

  updatePost(url:string, body: object){
    return this.httpClient.put(url, body)
  }

  deletePost(url:string){
    return this.httpClient.delete(url)
  }
}
