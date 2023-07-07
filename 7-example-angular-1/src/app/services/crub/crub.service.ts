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

  createPost(url: string) {
    return this.httpClient.post(url,{
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
  }

  update(url: string){
    return this.httpClient.put(url,{
      title: 'xx',
      body: 'yyy',
    })
  }

  deletePost(url: string){
    return this.httpClient.delete(url)
  }
}
