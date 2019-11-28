import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  status = false;

  ngOnInit() {}

  cssString() {
    return 'text-danger';
  }

  cssStringArray() {
    return ['text-primary', 'font-italic'];
  }

  cssConfig() {
    return {
      'text-success': true,
      'font-weight-bold': true
    };
  }

  styleConfig() {
    return {
      color: 'blue',
      border: '1px solid green'
    };
  }

  handler() {
    this.status = !this.status;
  }
}
