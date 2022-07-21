import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: "modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})

export class Modal implements OnInit {

  constructor(public dialogRef: MatDialogRef<Modal>, private router: Router){}
  ngOnInit(): void {
    this.sendControl.valueChanges.subscribe(val => {
      if(val != null) this.toBePaid = (val * 1) + this.fees;
      return val;
    })
  }
  
  sendControl = new FormControl(10);
  recipientControl = new FormControl(10);
  toBePaid = 10;
  fees = 1;

  onSubmit(){
    const {
      toBePaid,
      fees,
      sendControl,
    } = this;
    this.dialogRef.close({
      toBePaid,
      fees,
      amountToSend: sendControl.value,
    });
  }


}
