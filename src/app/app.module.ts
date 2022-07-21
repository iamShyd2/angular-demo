import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Modal } from './modal/modal.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { InputSelectComponent } from './shared/input-select/input-select.component'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailsDisplayComponent } from './shared/details-display/details-display.component';
import {MatStepperModule} from '@angular/material/stepper';
import { SendComponent } from './send/send.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    Modal,
    InputSelectComponent,
    DetailsDisplayComponent,
    SendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
