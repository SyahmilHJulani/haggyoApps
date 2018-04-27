import { Component,} from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Discussions } from '../../models/discussions.interface';

@Component({
  selector: 'page-view-discussions',
  templateUrl: 'view-discussions.html',
})
export class ViewDiscussionsPage {
	public discussions: Discussions;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.discussions = this.navParams.get('discussions');
  }

  goback(){
  	this.navCtrl.popToRoot();
  }
  
}


