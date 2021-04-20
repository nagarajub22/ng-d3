import { ElementRef, Injectable } from "@angular/core";
import { IChartData } from './waterfall.component';
import * as d3 from 'd3';

export interface IChartOptions {
    xAxisPosition: string,
    yAxisPosition: string
}


@Injectable()
export class Waterfall {

    chartOptions: IChartOptions | undefined = undefined;
    chartData: IChartData = { xAxis: [], yAxis: [] };
    svgEl: d3.Selection<null> | undefined;

    private xAxis: d3.svg.Axis | any;
    private yAxis: d3.svg.Axis | any;

    render(container: ElementRef, data: IChartData, options: IChartOptions) {
        console.log(container);
        if (container.nativeElement) {

            this.svgEl = d3.select(container.nativeElement).select('svg');

            if (!this.svgEl) {
                console.log('Something wrong with SVG element');
                return;
            }
            this.chartOptions = options;
            this.chartData = data;
            this.generateChart();
        }
    }

    private generateChart() {
        this.svgEl?.attr('width', window.innerWidth).attr('height', window.innerHeight);
        this.generateAxis();
        this.svgEl?.append('g').call(this.xAxis);
        this.svgEl?.append('g').call(this.yAxis);
    }

    private generateAxis() {
        this.xAxis = this.generateXAxis();
        this.yAxis = this.generateYAxis();
    }

    private generateXAxis() {
        const x = d3.scale.ordinal()
            .domain(this.chartData?.xAxis)
            .rangeRoundBands([0, window.innerWidth], 0.2);

        console.log(x.domain());

        return d3.svg.axis()
            .scale(x)
            .orient('bottom');

    }
    private generateYAxis() {

        const y = d3.scale.ordinal()
            .domain(this.chartData?.yAxis)
            .range([window.innerHeight, 0]);

        console.log(y.domain());

        return d3.svg.axis()
            .scale(y).orient("left");
    }
}