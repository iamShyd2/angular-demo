import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-display',
  templateUrl: './details-display.component.html',
  styleUrls: ['./details-display.component.scss']
})
export class DetailsDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() title!: string;
  @Input() value!: string | null;
}
