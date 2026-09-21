import { enableProdMode, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';

import { ProblemsService } from './app/problems-list/problems.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { routes } from './app/routes';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

if (!isDevMode()) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    provideRouter(routes),
    importProvidersFrom(BrowserModule, ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    })),
    ProblemsService, provideHttpClient(withInterceptorsFromDi()),
  ],
})
  .catch(err => console.error(err));
