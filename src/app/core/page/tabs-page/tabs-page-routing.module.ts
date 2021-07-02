import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPagePage } from './tabs-page.page';

const routes: Routes = [
  {
    path: 'loky',
    component: TabsPagePage,
    children: [
      {
        path: 'option',
        loadChildren: () =>
          import('../../../module/page/option-page/option-page.module').then(
            (m) => m.OptionPagePageModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../../../module/page/user-page/user-page.module').then(
            (m) => m.UserPagePageModule
          ),
      },
      {
        path: 'gallery',
        loadChildren: () =>
          import('../../../module/page/gallery-page/gallery-page.module').then(
            (m) => m.GalleryPagePageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/loky/option',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPagePageRoutingModule {}
