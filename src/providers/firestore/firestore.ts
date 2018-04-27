import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { News } from '../../models/news.interface';
import { Announcements } from '../../models/announcements.interface';
import { Account } from '../../models/account.interface';
import { Discussions } from '../../models/discussions.interface';
import { Cca } from '../../models/cca.interface';

@Injectable()
export class FirestoreProvider {

  constructor(public firestore: AngularFirestore) {}

 
  
  createNews(
    newsTitle: string,
    newsDetails: string
  ): Promise<void> {
  const id = this.firestore.createId();

  return this.firestore.doc('newsList/${id}').set({
  	id,
  	newsTitle,
  	newsDetails
  });
   }

   getNewsList(): AngularFirestoreCollection<News>{
   	return this.firestore.collection('newsList');
   }

   getAnnouncementsList(): AngularFirestoreCollection<Announcements>{
     return this.firestore.collection('announcementsList');
   }

   getAccountList(): AngularFirestoreCollection<Account>{
     return this.firestore.collection('accountList');
   }

   getDiscussionList(): AngularFirestoreCollection<Discussions>{
     return this.firestore.collection('discussionsList');
   }

   getCcaList(): AngularFirestoreCollection<Cca>{
     return this.firestore.collection('ccaList');
   }
}