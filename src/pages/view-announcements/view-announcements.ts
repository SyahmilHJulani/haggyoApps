
import { Component,} from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Announcements } from '../../models/announcements.interface';

@Component({
  selector: 'page-view-announcements',
  templateUrl: 'view-announcements.html',
})
export class ViewAnnouncementsPage {
	public announcements: Announcements;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.announcements = this.navParams.get('announcements');
  }

  goback(){
  	this.navCtrl.popToRoot();
  }
  
}

