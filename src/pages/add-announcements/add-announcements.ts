import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-add-announcements',
  templateUrl: 'add-announcements.html',
})
export class AddAnnouncementsPage {
  public createAnnouncementForm: FormGroup;
  announcementsList: any;
  private db: any;
  model: any = {};
  isEditing: boolean = false;


  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public firestoreProvider: FirestoreProvider,
              formBuilder: FormBuilder) {

    this.db = firebase.firestore();
    this.loadData();

    this.createAnnouncementForm = formBuilder.group({
    announcementsTitle: ['', Validators.required],
    announcementsDetails: ['', Validators.required]
    });
  }

  loadData(){
    this.getAllDocuments("announcementsList").then((e)=>{
      this.announcementsList = e;
  });
  }

  createAnnouncements(){
     if(!this.isEditing){
    this.addDocument("announcementsList", this.model).then(()=>{
      this.loadData();//refresh view
    });
  }else{
    this.updateDocument("announcementsList", this.model.$key, this.model).then(()=>{
      this.loadData();//refresh view
    });
  }
  this.isEditing = false;
  //clear form
  this.model.announcementsTitle = '';
  this.model.announcementsDetails = '';
  }

  goback(){
    this.navCtrl.popToRoot();
  }

  //CRUD OPERATION METHODS
  getAllDocuments(collection: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.collection(collection)
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id
                    console.log(obj)
                    arr.push(obj);
                });

                if (arr.length > 0) {
                    console.log("Document data:", arr);
                    resolve(arr);
                } else {
                    console.log("No such document!");
                    resolve(null);
                }


            })
            .catch((error: any) => {
                reject(error);
            });
    });
}

deleteDocument(collectionName: string, docID: string): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db
          .collection(collectionName)
          .doc(docID)
          .delete()
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

addDocument(collectionName: string, dataObj: any): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db.collection(collectionName).add(dataObj)
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

updateDocument(collectionName: string, docID: string, dataObj: any): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db
          .collection(collectionName)
          .doc(docID)
          .update(dataObj)
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}
}
