import { Injectable, Input } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(message: string)
  {
    this.messages.push(message);
  }

  clear()
  {
    this.messages = [];
  }

}
