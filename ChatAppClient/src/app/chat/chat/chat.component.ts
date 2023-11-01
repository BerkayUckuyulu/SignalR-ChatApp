import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SignalRService } from '../services/signal-r.service';
import { GroupComponent } from '../group/group.component';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  @Input() receivedName: string;
  constructor(private signalRService: SignalRService) {
    this.signalRService.on("receiveMessage", (result) => {
      if (result.senderClient.nickName != this.receivedName) {
        console.log(result);
        this.messageList.push({
          text: result.message,
          date: new Date(),
          reply: false,
          user: {
            name: result.senderClient.nickName,
            avatar: 'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
          },
        });
      }
    })
  }

  messageList: any = [];

  chats: any[] = [
    {
      status: 'warning',
      title: 'SignalR ChatApp',
      messages: this.messageList
    },
  ];

  sendMessage(messages: any, event: any, isForGroup: boolean) {
    if (!isForGroup) {
      GroupComponent.selectedClientList.unshift(event.message);
      this.signalRService.invoke("SendMessageWithNameList", GroupComponent.selectedClientList, () => { GroupComponent.selectedClientList.shift() });
    }
    else {
      this.signalRService.invoke("SendMessageWithGroupList", event.message);
    }




    this.messageList.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: this.receivedName,
        avatar: 'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
      },
    });
  }
}
