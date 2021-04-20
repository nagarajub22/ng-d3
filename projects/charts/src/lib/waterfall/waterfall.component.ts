import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Waterfall } from './waterfall.service';

export interface IChartData {
  xAxis: string[];
  yAxis: any[];
}

@Component({
  selector: 'nd3-waterfall',
  templateUrl: './waterfall.component.html',
  styleUrls: ['./waterfall.component.sass'],
  providers: [Waterfall]
})
export class WaterfallComponent implements OnInit, AfterViewInit {

  @Input() data: IChartData = {
    xAxis: [],
    yAxis: []
  };

  @ViewChild('container', { read: ElementRef }) wfContainer: ElementRef;

  constructor(private wf: Waterfall) {
    this.wfContainer = new ElementRef(null);
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.wf.render(this.wfContainer, this.data, {
      xAxisPosition: 'TOP',
      yAxisPosition: 'LEFT'
    });
  }
}
