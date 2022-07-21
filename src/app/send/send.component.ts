import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
})
export class SendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstFormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    dob: new FormControl(""),
    phone: new FormControl(""),
    address: new FormControl(""),
    country: new FormControl(""),
    zip: new FormControl(""),
  });

  secondFormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    dob: new FormControl(""),
    phone: new FormControl(""),
    address: new FormControl(""),
    country: new FormControl(""),
    zip: new FormControl(""),
  });
  
  thirdFormGroup = new FormGroup({
    name: new FormControl(""),
    cardNumber: new FormControl(""),
    expiry: new FormControl(""),
    cvv: new FormControl(""),
  });

}
