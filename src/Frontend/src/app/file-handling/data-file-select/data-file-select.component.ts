import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'data-file-select',
  templateUrl: './data-file-select.component.html',
  styleUrls: ['./data-file-select.component.css']
})
export class DataFileSelectComponent implements OnInit {
  
  onSelectFile(event){
    let files = event.files;
  }

  constructor() { }

  ngOnInit() {
  }
}
