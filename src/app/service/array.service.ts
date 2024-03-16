import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
posts:any[]=[
    {postID: "1", name: "Ruffa", dp:"dp1.png", content: "Hiking with my puffy puppy", image:"pexels-johann-2002056.jpg"},
    {postID: "2", name: "Kenny", dp:"dp2.png", content: "Going somewhere when we see this amazing view.", image:"pexels-oleksandr-p-321526.jpg"},
    {postID: "3", name: "Ruffa", dp:"dp1.png", content: "Water is so cold, by the lake", image:"pexels-riccardo-789382.jpg"},
    {postID: "4", name: "Kenny", dp:"dp2.png", content: "Jump with the nature", image:"pexels-sebastian-arie-voortman-214574.jpg"},
    {postID: "5", name: "Kenny", dp:"dp2.png", content: "Jump shots Buddies", image:"pexels-syed-qaarif-andrabi-8774079.jpg"},
  ];

  constructor() { }

  //Return all the data.
  getPosts(){
    return this.posts;
  }

  //Return all the data with the same name
  getPost(name: any){
  const post = this.posts.filter(x => x.name == name);
  return post;
  }
}
