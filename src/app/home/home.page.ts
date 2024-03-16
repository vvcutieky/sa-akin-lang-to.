import { Component, OnInit } from '@angular/core';
import { ArrayService } from '../service/array.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
posts: any[] =[];

  constructor(private posting:ArrayService, private router:Router) {}

  ngOnInit() {
    this.posts = this.posting.getPosts(); 
  }
  


}
