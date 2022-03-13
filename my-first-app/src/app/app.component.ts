import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // for adding files name directly
  /*styles:[`
      h3{
        color:dodgerblue;  // for adding inline css
      }
  `]*/
})

export class AppComponent {
  title = 'My';
  // name = 'Jaydeep';
}
