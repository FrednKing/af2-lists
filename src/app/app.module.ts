import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBSLa8vdXzjY0J6wF7g-8nZ5OwBCET4CsU",
  authDomain: "angularfire2-list-exampl-8b16b.firebaseapp.com",
  databaseURL: "https://angularfire2-list-exampl-8b16b.firebaseio.com",
  storageBucket: "angularfire2-list-exampl-8b16b.appspot.com",
  messagingSenderId: "17272854833"
};

export class AppModule {}
