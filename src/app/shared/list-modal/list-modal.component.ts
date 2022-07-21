import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<ListModalComponent>) { }

  ngOnInit(): void {
  }

  items = [
    "Ghana",
  ];

  onSetItem(item: string){
    this.matDialogRef.close(item);
  }

}
