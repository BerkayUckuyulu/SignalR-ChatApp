import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7172/chatHub')
      .build();

    this.start();
  }

  start() {
    this.hubConnection.start()
      .then(() => console.log('SignalR başlatıldı.'))
      .catch(err => setTimeout(() => { this.start() }, 2000));
  }


  invoke(procedureName: string, message: any, successCallBack?: (value) => void, errorCallBack?: (error) => void) {

    this.hubConnection.invoke(procedureName, message).then(successCallBack).catch(errorCallBack);
  }

  on(procedureName: string, calback: (...message) => void) {
    this.hubConnection.on(procedureName, calback);

  }
}
