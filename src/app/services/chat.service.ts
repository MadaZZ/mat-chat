import { Injectable } from '@angular/core';
//import {  } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable,FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { ChatMessage } from '../models/chat-message.model'


@Injectable()
export class ChatService {
  user: any;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;
  
  constructor( private db: AngularFireDatabase, private afAuth: AngularFireAuth){
    this.afAuth.authState.subscribe(auth=>{
      //We have set user to auth if it is not undefined or null
      if(auth !== undefined && auth !== null){
        this.user=auth;
      }
    });
  }

  //Function to send message
  sendMessage(msg:string){
    var timestamp= this.getTimeStamp();
    var email= this.user.email;
    this.chatMessages=this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      userName: this.userName,
      email1: email
    });
  }

  //Function to get timeStamp
  getTimeStamp(){
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return(date+ ' ' + time);
  }
  
  //this function gets message from firebase.
   getMessages(): FirebaseListObservable<ChatMessage[]> {
    // query to create our message feed binding
    return this.db.list('messages', {
      query: {
        limitToLast: 25,
        orderByKey: true
      }
    });
  }
}
