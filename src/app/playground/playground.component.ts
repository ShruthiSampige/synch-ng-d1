import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @Input() title: string;
  @Output() loginEvent = new EventEmitter();

  counter = 0;

  constructor() {}

  ngOnInit() {}

  clickHandler() {
    this.counter++;
  }
}
