import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ArrayService } from '../service/array.service';



@Component({
  selector: 'app-blank',
  templateUrl: './blank.page.html',
  styleUrls: ['./blank.page.scss'],
})
export class BlankPage implements OnInit {
  posts: any[] =[];
  constructor(private sample:Router, private navCtrl:NavController, private array : ArrayService) { 
    
  }

  ngOnInit() {
   this.posts = this.array.getPosts();
  };

  onClick(){
    //this.sample.navigateByUrl('/tabs/message');
    this.navCtrl.navigateRoot('tabs/message');
  };

 

}
