import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersPage } from './characters.page';

const routes: Routes = [
  {
    path: '',
    component: CharactersPage
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
