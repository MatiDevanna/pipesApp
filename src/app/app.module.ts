import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuración del idioma de la app
import localesEsAr  from '@angular/common/locales/es-AR';
import localesFrCa  from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localesEsAr); // ésta funcion la tengo que llamar para que establezca en Angular el idioma
registerLocaleData(localesFrCa);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule

],
  providers: [
    {//inyecto el servicio para que toda la app por defecto esté en español
      provide: LOCALE_ID, useValue: 'es-AR'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
