import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { NewsPage } from '../pages/news/news';
import { AccountPage } from '../pages/account/account';
import { AnnouncementPage } from '../pages/announcement/announcement';
import { AttendancePage } from '../pages/attendance/attendance';
import { CcaPage } from '../pages/cca/cca';
import { DiscussionPage } from '../pages/discussion/discussion';

import { AddNewsPage } from '../pages/add-news/add-news';
import { AddAnnouncementsPage } from '../pages/add-announcements/add-announcements';
import { ViewNewsPage } from '../pages/view-news/view-news';
import { ViewAnnouncementsPage } from '../pages/view-announcements/view-announcements';
import { AddDiscussionsPage } from '../pages/add-discussions/add-discussions';
import { ViewDiscussionsPage } from '../pages/view-discussions/view-discussions';
import { AddCcaPage } from '../pages/add-cca/add-cca';

import { AuthService } from '../services/auth.services';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirestoreProvider } from '../providers/firestore/firestore';
import { config } from './credentials';


@NgModule({
  declarations: [
    MyApp,
    LoginPage, MenuPage, NewsPage, AccountPage, AnnouncementPage, AttendancePage, CcaPage, DiscussionPage,
    AddNewsPage, AddAnnouncementsPage, ViewNewsPage, ViewAnnouncementsPage, AddDiscussionsPage, ViewDiscussionsPage, AddCcaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage, MenuPage, NewsPage, AccountPage, AnnouncementPage, AttendancePage, CcaPage, DiscussionPage,
    AddNewsPage, AddAnnouncementsPage, ViewNewsPage, ViewAnnouncementsPage, AddDiscussionsPage, ViewDiscussionsPage, AddCcaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    FirestoreProvider,
    BarcodeScanner
  ]
})
export class AppModule {}
