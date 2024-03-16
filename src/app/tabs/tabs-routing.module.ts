import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then((m) => m.HomePageModule),
          }
        ],
      },
      {
        path: 'message',
        children: [
          {
            path: '',
            loadChildren: () => import('../message/message.module').then((m) => m.MessagePageModule),
          }
        ],
      },
      {
        path: 'profile/:username',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then((m) => m.ProfilePageModule),
          }
        ],
      },
      {
        path: 'blank',
        children: [
          {
            path: '',
            loadChildren: () => import('../blank/blank.module').then((m) => m.BlankPageModule),
          },
        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
