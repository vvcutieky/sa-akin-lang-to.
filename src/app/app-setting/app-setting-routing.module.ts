import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppSettingPage } from './app-setting.page';

const routes: Routes = [
  {
    path: '',
    component: AppSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppSettingPageRoutingModule {}
