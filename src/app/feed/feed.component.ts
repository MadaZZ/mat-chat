import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.model';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges{
  feed: any;
  //feed: AngularFireList<ChatMessage[]>; //Doesn't work same issue like it was in chat.service
  constructor(private chatservice: ChatService) { }

  ngOnInit() {
    //console.log("feedinit")
    this.feed= this.chatservice.getMessages();
  }

  ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.feed= this.chatservice.getMessages();
  }
}
