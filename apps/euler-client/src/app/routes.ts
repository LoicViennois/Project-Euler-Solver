import { Routes } from '@angular/router';
import { CodeViewComponent } from './code-view/code-view.component';
import { ProblemsListComponent } from './problems-list/problems-list.component';
import { CodeBlockComponent } from './code-view/code-block/code-block.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
  {
    path: '',
    component: ProblemsListComponent,
  },
  {
    path: 'code',
    component: CodeViewComponent,
    children: [
      {
        path: ':id',
        component: CodeBlockComponent,
      },
    ],
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

