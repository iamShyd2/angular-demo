import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  @Input() label!: string;
  @Input() controlName!: string;
  @Input() inputControl!: FormControl;


}
