import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
 
import { LoginPage } from '../login/login';
import { AccountPage } from '../account/account';
import { NewsPage } from '../news/news';
import { AnnouncementPage } from '../announcement/announcement';
import { CcaPage } from '../cca/cca';
import { DiscussionPage } from '../discussion/discussion';
import { AttendancePage } from '../attendance/attendance';

import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService,
              public modalCtrl: ModalController, public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  accountpage(){
  	this.navCtrl.push(AccountPage);
  }

  newspage(){
  	this.navCtrl.push(NewsPage);
  }

  announcementpage(){
  	this.navCtrl.push(AnnouncementPage);
  }

  ccapage(){
  	this.navCtrl.push(CcaPage);
  }

  discussionpage(){
  	this.navCtrl.push(DiscussionPage);
  }

  attendancepage(){
  	this.navCtrl.push(AttendancePage);
  }

  onLogout(){
    const loading = this.loadCtrl.create({
      content: 'Signing You Out...'
    });
    loading.present();
     setTimeout(() => {
   this.authService.logout();
  let modal = this.modalCtrl.create(LoginPage);
  modal.present();
    }, 1000);
        setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

}

 