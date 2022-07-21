import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

class Params {
  
  toBePaid: string = "11";
  fees: string = "1";
  amountToSend: string = "10";

}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {    
    let routeParams = this.route.snapshot.paramMap;
    this.params = {
      fees: routeParams.get("fees") || "1",
      toBePaid: routeParams.get("toBePaid") || "11",
      amountToSend: routeParams.get("amountToSend") || "10",
    }
  }

  @Input() secondFormGroup!: FormGroup;
  params = new Params();

  recipientName(): string{
    const firstName = this.secondFormGroup.get("firstName")?.value;
    const lastName = this.secondFormGroup.get("lastName")?.value;
    return `${firstName} ${lastName}`;
  }
}
