import { Component, OnInit, Optional } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { NameDialogComponent } from './chat/name-dialog/name-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string | any;

  constructor(public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.openDialog();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(NameDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }
}



