import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-add-cca',
  templateUrl: 'add-cca.html',
})
export class AddCcaPage {
  public createCcaForm: FormGroup;
  ccaList: any;
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

    this.createCcaForm = formBuilder.group({
    ccaTitle: ['', Validators.required],
    ccaDetails: ['', Validators.required]
    });
  }

  loadData(){
    this.getAllDocuments("ccaList").then((e)=>{
      this.ccaList = e;
  });
  }

  createCca(){
     if(!this.isEditing){
    this.addDocument("ccaList", this.model).then(()=>{
      this.loadData();//refresh view
    });
  }else{
    this.updateDocument("ccaList", this.model.$key, this.model).then(()=>{
      this.loadData();//refresh view
    });
  }
  this.isEditing = false;
  //clear form
  this.model.ccaTitle = '';
  this.model.ccaDetails = '';
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

