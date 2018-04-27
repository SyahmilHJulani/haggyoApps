import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Account } from '../../models/account.interface';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  public accountList: Observable<Account[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public modalCtrl: ModalController, public firestoreProvider: FirestoreProvider) {}

  
  ionViewDidLoad(){
    this.accountList = this.firestoreProvider.getAccountList().valueChanges();
  }

  goback(){
    this.navCtrl.popToRoot();
  }

}


