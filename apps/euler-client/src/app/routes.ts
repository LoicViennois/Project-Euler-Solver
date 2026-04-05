import { Routes } from '@angular/router';
import { ProblemsListComponent } from './problems-list/problems-list.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
  {
    path: '',
    component: ProblemsListComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

