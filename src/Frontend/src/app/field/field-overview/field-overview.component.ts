import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'field-overview',
  templateUrl: './field-overview.component.html',
  styleUrls: ['./field-overview.component.css']
})
export class FieldOverviewComponent implements OnInit {
    private showDialog;

    toggleDialog(){
      this.showDialog = !this.showDialog;
    }

  constructor() { }

  ngOnInit() {
  }

}
