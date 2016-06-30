import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {SecretsRepo} from "./app/secretsRepository.service";
import {HTTP_PROVIDERS} from "@angular/http";

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[SecretsRepo,HTTP_PROVIDERS]);

