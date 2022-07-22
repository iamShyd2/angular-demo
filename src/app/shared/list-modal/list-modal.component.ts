import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CountryList } from "../../../countries";

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<ListModalComponent>) { }

  ngOnInit(): void {
  }

  items = CountryList;

  onSetItem(item: any){
    this.matDialogRef.close(item.name);
  }

}
