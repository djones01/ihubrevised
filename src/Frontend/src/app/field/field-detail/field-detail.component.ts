import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.css']
})
export class FieldDetailComponent implements OnInit {
  @Input() field: any;

  constructor() { }

  ngOnInit() {
  }

}
