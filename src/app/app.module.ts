import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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
import {MatGridListModule} from '@angular/material/grid-list';
import { InputComponent } from './shared/input/input.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatepickerComponent } from './shared/datepicker/datepicker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DetailsFormComponent } from './send/details-form/details-form.component';
import { SummaryComponent } from './send/summary/summary.component';
import { PaymentComponent } from './send/payment/payment.component';
import { FormcontrolPipe } from './pipes/formcontrol.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Modal,
    InputSelectComponent,
    DetailsDisplayComponent,
    SendComponent,
    InputComponent,
    DatepickerComponent,
    DetailsFormComponent,
    SummaryComponent,
    PaymentComponent,
    FormcontrolPipe,
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
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
