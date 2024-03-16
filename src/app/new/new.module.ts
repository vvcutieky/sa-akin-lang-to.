import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableComponent } from '../component/reusable/reusable.component';
import { IonicModule } from '@ionic/angular';
import { PostingComponent } from '../component/posting/posting.component';



@NgModule({
  declarations: [
    ReusableComponent,
    PostingComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    ReusableComponent,
    PostingComponent
  ]
})
export class NewModule { }
