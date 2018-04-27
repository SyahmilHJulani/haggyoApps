import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Cca } from '../../models/cca.interface';
import { AddCcaPage } from '../../pages/add-cca/add-cca';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-cca',
  templateUrl: 'cca.html',
})
export class CcaPage {

  public ccaList: Observable<Cca[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public modalCtrl: ModalController, public firestoreProvider: FirestoreProvider) {}

  
  ionViewDidLoad(){
    this.ccaList = this.firestoreProvider.getCcaList().valueChanges();
  }

  goback(){
    this.navCtrl.popToRoot();
  }

  addcca(){
    this.navCtrl.push(AddCcaPage);
  }

}
