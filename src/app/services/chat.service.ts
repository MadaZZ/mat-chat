import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireObject,AngularFireList} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';


@Injectable()
export class ChatService {
  sendMessage(message:string){
  }
  constructor() { }

}
