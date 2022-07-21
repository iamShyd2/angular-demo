import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss'],
})
export class DetailsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title!: string;
  @Input() detailsFormGroup!: FormGroup;
}
