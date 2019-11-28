import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @Input() title: string;
  @Output() loginEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  clickHandler() {
    this.loginEvent.emit({
      on: new Date(),
      message: 'Custom event emitted from the playground'
    });
  }
}
