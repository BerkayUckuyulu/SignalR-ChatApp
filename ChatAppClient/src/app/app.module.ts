import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ChatModule } from './chat/chat.module';
import { NbDialogModule, NbLayoutModule } from '@nebular/theme';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChatModule,
    NbLayoutModule,
    NbDialogModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
