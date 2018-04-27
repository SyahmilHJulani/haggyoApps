import { Component,} from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { News } from '../../models/news.interface';

@Component({
  selector: 'page-view-news',
  templateUrl: 'view-news.html',
})
export class ViewNewsPage {
	public news: News;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.news = this.navParams.get('news');
  }

  goback(){
  	this.navCtrl.popToRoot();
  }
  
}
