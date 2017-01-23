import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FieldStatus } from '../field';

@Component({
  selector: 'field-order-list',
  templateUrl: './field-order-list.component.html',
  styleUrls: ['./field-order-list.component.css']
})
export class FieldOrderListComponent implements OnInit {
  @Input('fields') _fields: FieldStatus[];
  @Output() onItemsConfirmed = new EventEmitter();

  fields: FieldStatus[];

  constructor() {
    this.fields = [];
   }

  ngOnInit() {
  }
}