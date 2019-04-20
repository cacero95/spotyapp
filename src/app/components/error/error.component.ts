import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() problema:any;
  
  constructor() { }

  ngOnInit() {
  }

}
