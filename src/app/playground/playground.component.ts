import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent
  implements OnInit, AfterViewInit, OnChanges, DoCheck, AfterContentInit {
  @Input() prop: string;

  counter = 0;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked for the component');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked for the projected content');
  }

  handler() {
    console.log('click');
    this.counter++;
  }
}
