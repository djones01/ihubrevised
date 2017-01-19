import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'data-file-select-component',
  templateUrl: './data-file-select-component.component.html',
  styleUrls: ['./data-file-select-component.component.css']
})
export class DataFileSelectComponentComponent implements OnInit {
  
  onSelectFile(event){
    let files = event.files;
  }

  constructor() { }

  ngOnInit() {
  }
}
