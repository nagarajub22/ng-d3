import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-d3';

  data = {
    xAxis: ['£ Sales Year Ago', 'WHITE WINE', 'RED WINE', 'light RED WINE', 'other'],
    yAxis: [10, 20, 12,30,5]
  }
}
