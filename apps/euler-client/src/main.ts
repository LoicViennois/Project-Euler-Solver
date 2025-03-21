import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { ProblemsService } from './app/problems-list/problems.service';
import { UrlBuilderService } from './app/problems-list/url-builder.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { routes } from './app/routes';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule, ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    })),
    ProblemsService, UrlBuilderService, provideHttpClient(withInterceptorsFromDi()),
  ],
})
  .catch(err => console.error(err));
