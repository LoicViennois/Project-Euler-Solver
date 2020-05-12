// Modules
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'

// Components
import { AppComponent } from './app.component'
import { ProblemCardComponent } from './problems-list/problem-card/problem-card.component'
import { ProblemsListComponent } from './problems-list/problems-list.component'
import { CodeViewComponent } from './code-view/code-view.component'
import { CodeBlockComponent } from './code-view/code-block/code-block.component'

// Providers
import { ProblemsService } from './problems-list/problems.service'
import { FirstIdPipe, LastIdPipe } from './problems-list/problem-id.pipe'

// PWA
import { FormatCodePipe } from './code-view/format-code.pipe'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    ProblemCardComponent,
    FirstIdPipe,
    LastIdPipe,
    ProblemsListComponent,
    CodeViewComponent,
    FormatCodePipe,
    CodeBlockComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [ProblemsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
