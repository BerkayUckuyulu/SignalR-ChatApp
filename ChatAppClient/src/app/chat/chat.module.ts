import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { NbButtonModule, NbCardModule, NbChatModule, NbDialogRef, NbIconModule, NbInputModule, NbLayoutModule, NbSelectModule, NbThemeModule } from '@nebular/theme';
import { GroupComponent } from './group/group.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { NameDialogComponent } from './name-dialog/name-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    ChatComponent,
    GroupComponent,
    NameDialogComponent
  ],
  imports: [
    CommonModule,
    NbChatModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbSelectModule,
    NgFor,
    NbInputModule,
    NbButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    ChatComponent,
    GroupComponent,
  ]
})
export class ChatModule { }
