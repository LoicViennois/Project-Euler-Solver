import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeViewComponent } from './code-view/code-view.component';
import { ProblemsListComponent } from './problems-list/problems-list.component';
import { CodeBlockComponent } from './code-view/code-block/code-block.component';
import { ModalContainerComponent } from './modals/modal-container/modal-container.component';
import { CopyrightComponent } from './modals/copyright/copyright.component';

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
        path: ':name',
        component: CodeBlockComponent,
      }
    ]
  },
  {
    path: 'copyright',
    component: ModalContainerComponent,
    data: { component: CopyrightComponent },
    outlet: 'modal'
  },
  {
    path: '**',
    redirectTo: '',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
