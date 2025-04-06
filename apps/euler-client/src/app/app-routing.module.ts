import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeViewComponent } from './code-view/code-view.component';
import { ProblemsListComponent } from './problems-list/problems-list.component';
import { CodeBlockComponent } from './code-view/code-block/code-block.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
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


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
