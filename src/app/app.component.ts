import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get title() {
    return 'Title goes here!';
  }

  parentHandler(args) {
    console.log('Parent called', args);
  }
}
