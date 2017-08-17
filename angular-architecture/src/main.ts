/**
 * entry point file
 */

import 'reflect-metadata';
import 'zone.js';
import {AppModule} from './app/app.module';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

platformBrowserDynamic().bootstrapModule(AppModule);
