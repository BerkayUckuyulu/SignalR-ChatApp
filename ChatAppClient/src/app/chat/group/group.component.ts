import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SignalRService } from '../services/signal-r.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {
  users: string[];
  groupList: string[];
  groupName: string;
  selectedGroupList: string[];
  static selectedClientList: string[] = [];

  constructor(private signalRService: SignalRService) {
    this.users = [];
    this.groupList = [];


    this.signalRService.on("clientJoined", (nickName) => {
      alertify.notify(`${nickName} katıldı.`, "success", 3);
      this.users.push(nickName);
    })
    this.signalRService.on("groupAdded", (groupName) => {
      alertify.notify(`${groupName} oluşturuldu.`, "success", 3);
      this.groupList.push(groupName);
    })


  }

  CreateAndJoinGroup() {
    this.signalRService.invoke("CreateAndJoinGroup", this.groupName, () => {
      alertify.notify(`${this.groupName} grubu oluşturuldu.`, "success", 3);
    })
  }

  JoinGroup() {
    this.signalRService.invoke("JoinGroup", this.selectedGroupList, () => {
      alertify.notify(`Gruplara katılım sağlandı.`, "success", 3);
    })
  }

  updateSelectedItems(item: string): void {
    if (GroupComponent.selectedClientList.includes(item)) {
      GroupComponent.selectedClientList = GroupComponent.selectedClientList.filter(selectedItem => selectedItem !== item);
    } else {
      GroupComponent.selectedClientList.push(item);
    }
  }




}
