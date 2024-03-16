import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppSettingPageRoutingModule } from './app-setting-routing.module';

import { AppSettingPage } from './app-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppSettingPageRoutingModule
  ],
  declarations: [AppSettingPage]
})
export class AppSettingPageModule {}
