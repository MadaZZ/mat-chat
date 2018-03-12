import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.model';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() chatMessage: ChatMessage;
  email: string;
  userName: string;
  messageContent: string;
  time: Date= new Date();
  //isOwn=
  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent= chatMessage.message;
    this.time= chatMessage.timeSent;
    this.email= chatMessage.email;
    this.userName= chatMessage.userName;
  }

}
