import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP } from '@ionic-native/http/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    SuperTabsModule.forRoot()
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CallNumber,
    Camera,
    EmailComposer,
    HTTP,
    InAppBrowser,
    PhotoViewer
  ],
})
export class AppModule { }
