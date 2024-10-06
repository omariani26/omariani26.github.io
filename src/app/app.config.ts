import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { NbThemeModule, NbLayoutModule, NbActionsModule } from "@nebular/theme";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    ...(NbThemeModule.forRoot({ name: "default" }).providers || []),
    NbLayoutModule,
    NbActionsModule,
  ],
};
