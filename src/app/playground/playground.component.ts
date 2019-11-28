import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  status = false;

  cities = ['Bengaluru', 'Mysuru', 'Hubballi', 'Bidar'];

  ngOnInit() {}

  handler() {
    this.status = !this.status;
  }
}
