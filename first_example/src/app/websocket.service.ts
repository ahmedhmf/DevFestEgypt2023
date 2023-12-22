import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  message$ = new BehaviorSubject([]);
  newMessage$ = new BehaviorSubject([]);
  socket = io('http://localhost:3000');

  public sendMessage(message: any) {
    console.log('sendMessage: ', message)
    this.socket.emit('products', message);
  }

  public getNewMessage = () => {
    this.socket.on('products', (message) =>{
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };

}
