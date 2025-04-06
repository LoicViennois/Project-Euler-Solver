// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProblemCardComponent } from './problems-list/problem-card/problem-card.component';
import { ProblemsListComponent } from './problems-list/problems-list.component';
import { CodeViewComponent } from './code-view/code-view.component';
import { CodeBlockComponent } from './code-view/code-block/code-block.component';
import { ProblemsService } from './problems-list/problems.service';
import { FirstIdPipe, LastIdPipe } from './problems-list/problem-id.pipe';
import { FormatCodePipe } from './code-view/format-code.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UrlBuilderService } from './problems-list/url-builder.service';
import { AboutComponent } from './about/about.component';

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
    AboutComponent,
  ],
  bootstrap: [AppComponent], imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    })], providers: [ProblemsService, UrlBuilderService, provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {
}
