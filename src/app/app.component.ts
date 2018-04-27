import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.services';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthService) {
    
    firebase.initializeApp({
       apiKey: "AIzaSyAXERyF01-Ke1zdZPR1kQdivXvJ21Qngyo",
    authDomain: "haggyoapps.firebaseapp.com",
    databaseURL: "https://haggyoapps.firebaseio.com",
    projectId: "haggyoapps",
    storageBucket: "haggyoapps.appspot.com",
    messagingSenderId: "265408026789"
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

 

}

