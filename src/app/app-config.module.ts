import { NgModule, InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

// TODO: get rid of warnings by splitting interface out into separate file
// export interface AppConfig {
export class AppConfig {
  apiUrl: string;
}

export const APP_DI_CONFIG: AppConfig = {
  apiUrl: 'http://api.ecartoongrafix'
};

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class AppConfigModule { }
