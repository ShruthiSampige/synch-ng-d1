import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  @ViewChild('para', { static: true }) set pEl(value: ElementRef) {
    console.log('Element', value);
    value.nativeElement.className = 'font-weight-bold';
  }
}
