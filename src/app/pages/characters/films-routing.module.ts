import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsPage } from './films.page';

const routes: Routes = [
  {
    path: '',
    component: FilmsPage
  },
  {
    path: 'characters',
    loadChildren: () => import('./characters.module').then( m => m.CharactersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsPageRoutingModule {}
