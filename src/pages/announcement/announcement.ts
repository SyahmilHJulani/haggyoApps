import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Announcements } from '../../models/announcements.interface';
import { ViewAnnouncementsPage } from '../../pages/view-announcements/view-announcements'
import { AddAnnouncementsPage } from '../../pages/add-announcements/add-announcements';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-announcement',
  templateUrl: 'announcement.html',
})
export class AnnouncementPage {

  public announcementsList: Observable<Announcements[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public modalCtrl: ModalController, public firestoreProvider: FirestoreProvider) {}

  
  ionViewDidLoad(){
    this.announcementsList = this.firestoreProvider.getAnnouncementsList().valueChanges();
  }

  goback(){
    this.navCtrl.popToRoot();
  }

  addAnnouncements(){
    this.navCtrl.push(AddAnnouncementsPage);
  }

  announcementsDetails(announcements: Announcements): void{
    this.navCtrl.push(ViewAnnouncementsPage, {announcements: announcements});
  }

}

