import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArrayService } from 'src/app/service/array.service';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss'],
})
export class PostingComponent  implements OnInit {
  posts: any[] =[];

  constructor(private posting:ArrayService, private router:Router) {}

  ngOnInit() {
    this.posts = this.posting.getPosts(); 
  }

}
