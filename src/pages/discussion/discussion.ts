import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Discussions } from '../../models/discussions.interface';
import { ViewDiscussionsPage } from '../../pages/view-discussions/view-discussions';
import { AddDiscussionsPage } from '../../pages/add-discussions/add-discussions';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html',
})
export class DiscussionPage {

  public discussionsList: Observable<Discussions[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public modalCtrl: ModalController, public firestoreProvider: FirestoreProvider) {}

  
  ionViewDidLoad(){
    this.discussionsList = this.firestoreProvider.getDiscussionList().valueChanges();
  }

  goback(){
    this.navCtrl.popToRoot();
  }

  addDiscussions(){
    this.navCtrl.push(AddDiscussionsPage);
  }

  discussionsDetails(discussions: Discussions): void{
    this.navCtrl.push(ViewDiscussionsPage, {discussions: discussions});
  }

}