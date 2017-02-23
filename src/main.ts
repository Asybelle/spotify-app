import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {appRoutingProviders} from './app/app.routes';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { disableDeprecatedForms, provideForms } from '@angular/forms';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [
    appRoutingProviders,
    disableDeprecatedForms(),     // Disable old Forms API!
    provideForms()
]).catch((err: any) => console.error(err));
