import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'rule-field-edit',
  templateUrl: './rule-field-edit.component.html',
  styleUrls: ['./rule-field-edit.component.css']
})
export class RuleFieldEditComponent implements OnInit {
  @Input('group')
  ruleFieldForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
