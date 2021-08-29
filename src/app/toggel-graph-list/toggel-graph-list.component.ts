import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-toggel-graph-list',
  templateUrl: './toggel-graph-list.component.html',
  styleUrls: ['./toggel-graph-list.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class ToggelGraphListComponent  {
    toggle_tab:string = 'List';
    public data: Object[] = [
        { x: 'Station Name 1', y: 121 }, 
        { x: 'Station Name 2', y: 160 },
        { x: 'Station Name 3', y: 245 }, 
        { x: 'Station Name 4', y: 250 },
        { x: 'Station Name 5', y: 174 }, 
        { x: 'Station Name 6', y: 265 },
        { x: 'Station Name 7', y: 185 },
        
    ];

    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'Category',
        minimum: -0.5,
        maximum: 6.5,
        labelPlacement: 'OnTicks',
        majorGridLines: { width: 0 },
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        rangePadding: 'None',
        minimum: 100,
        maximum: 300,
        interval: 50,
        lineStyle: { width: 0 },
        title : '',
        labelFormat: '{value}',
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    };
    public chartArea: Object = {
        
        border: {
            width: 0
        }
    };
    public width: string = Browser.isDevice ? '100%' : '100%';
    public marker: Object = {
        visible: true,
        height: 10,
        width: 10
    };
    public dragSettings: Object = {
        enable: true
    };
    public tooltip: Object = {
        enable: true
    };
    // custom code start
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    };
    // custom code end
    public title: string = 'Sales prediction of products';
    constructor() {
       //code
    };
    toggel(tab){
        this.toggle_tab = tab;
    }
}
