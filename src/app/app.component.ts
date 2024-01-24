import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//
    // styleUrls: ['./app.component.css']
//inline styling is used
  styles: [`
    h3 {
      color: blue;
    }
  `]
})
export class AppComponent {
  title = 'my-first-app';
}
