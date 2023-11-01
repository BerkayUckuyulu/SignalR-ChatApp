import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { SignalRService } from '../services/signal-r.service';


@Component({
  selector: 'app-name-dialog',
  templateUrl: './name-dialog.component.html',
  styleUrls: ['./name-dialog.component.css']
})
export class NameDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NameDialogComponent>,
    private signalRService: SignalRService
  ) { }
  name: string | any;

  SetName(name: string) {

    this.signalRService.invoke("getNickName", name)

  }
}
