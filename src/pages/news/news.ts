import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { News } from '../../models/news.interface';
import { ViewNewsPage } from '../../pages/view-news/view-news';
import { AddNewsPage } from '../../pages/add-news/add-news';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  public newsList: Observable<News[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public modalCtrl: ModalController, public firestoreProvider: FirestoreProvider) {}

  
  ionViewDidLoad(){
    this.newsList = this.firestoreProvider.getNewsList().valueChanges();
  }

  goback(){
  	this.navCtrl.popToRoot();
  }

  addNews(){
    this.navCtrl.push(AddNewsPage);
  }

  newsDetails(news: News): void{
    this.navCtrl.push(ViewNewsPage, {news: news});
  }

}
