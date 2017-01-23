import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'field-detail-list',
  templateUrl: './field-detail-list.component.html',
  styleUrls: ['./field-detail-list.component.css']
})
export class FieldDetailListComponent implements OnInit {
  @Input() fields: any[];

  constructor() { }

  ngOnInit() {
  }

}
