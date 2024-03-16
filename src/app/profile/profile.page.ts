import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ArrayService } from '../service/array.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  cont:any;
  name:any;
  constructor(private posts:ArrayService, private Activeroute:ActivatedRoute) {
   }

  ngOnInit() {
    //get the dynamic route in the URL
    let postID = this.Activeroute.snapshot.paramMap.get('username');
    //find if the get dynamic route id is available in the Arraylist and store in the cont
    this.cont = this.posts.getPost(postID);
    //intended to store the postID
    this.name = postID;
    //sent a value of post ID on the message log ---- console
    console.log(postID);
  }
  
  onClick() {

  }
}
