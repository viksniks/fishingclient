import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenusModule } from './components/menus.module';
import { DatePipe } from '@angular/common';

import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {TextToSpeech} from "@ionic-native/text-to-speech/ngx";
import {PopoverPageModule} from "./popover/popover.module";
import {ReportsPageModule} from "./reports/reports.module";



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      backButtonText: '',
      backButtonIcon: 'arrow-back',
      swipeBackEnabled: false,
      mode: 'ios',
    }),
    AppRoutingModule,
    HttpClientModule,
    PopoverPageModule,
    ReportsPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot({ name: 'stionic_hala_application' }),
    MenusModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    InAppBrowser,
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SpeechRecognition,
    Geolocation,
    TextToSpeech
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
