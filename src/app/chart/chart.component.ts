import { Component, OnInit } from '@angular/core';
import {  ViewEncapsulation, ViewChild } from '@angular/core';
import { ILoadedEventArgs, ChartComponent, ChartTheme, FontModel } from '@syncfusion/ej2-angular-charts';
import { ChartSeriesType } from '@syncfusion/ej2-charts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Browser } from '@syncfusion/ej2-base';
import { AnimationModel } from '@syncfusion/ej2-progressbar';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class Chart_Component implements OnInit {

public data: Object[] = [
        { x: '24:00', y: 4 },
        { x: '02:00', y: 3.0 },
        { x: '04:00', y: 3.8 },
        { x: '06:00', y: 3.4 },
        { x: '08:00', y: 3.2 }, 
        { x: '10:00', y: 3.9 },
        { x: '12:00', y: 3.2 }, 
        { x: '14:00', y: 3.9 },
        { x: '16:00', y: 3.2 }, 
        { x: '18:00', y: 3.9 },
        { x: '20:00', y: 3.2 }, 
        { x: '22:00', y: 3.9 }
    ];
    public data1: Object[] = [
        
    ];
    public data2: Object[] = [
        { x: '24:00', y: 3 },
        { x: '02:00', y: 2.6 },
        { x: '04:00', y: 3.1 },
        { x: '06:00', y: 4.4 },
        { x: '08:00', y: 3.8 }, 
        { x: '10:00', y: 3 },
        { x: '12:00', y: 2.7 }, 
        { x: '14:00', y: 2.9 },
        { x: '16:00', y: 4.1 }, 
        { x: '18:00', y: 4.9 },
        { x: '20:00', y: 4.9 }, 
        { x: '22:00', y: 4.6 }
    ];
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'Category',
        labelPlacement: 'OnTicks',
        interval: 1,
        coefficient: Browser.isDevice ? 80 : 90,
        
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        title: 'Revenue in Millions',
        labelFormat: '{value}M'
    };
    public marker: Object = {
        visible: false
    };
      // custom code start
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    };
      // custom code end
    public title: string = '';
    @ViewChild('chart')
    public chart: ChartComponent;
    public seriesType: DropDownList;
    ngOnInit(): void {
    }
    constructor() {
        // code
     };



}
