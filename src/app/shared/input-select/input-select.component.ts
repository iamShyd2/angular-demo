import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {

  @Input() label!: string;
  @Input() inputControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
