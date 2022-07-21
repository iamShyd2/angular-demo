import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ListModalComponent } from '../list-modal/list-modal.component';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {

  @Input() label!: string;
  @Input() inputControl!: FormControl;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {}

  value: string = "Ghana";

  onSelect(){
    let dialogRef = this.matDialog.open(ListModalComponent, {
      panelClass: "list-modal-panel",
    });    

    
    dialogRef.afterClosed().subscribe((result) => {
      this.value = result;
    });
  }

}
