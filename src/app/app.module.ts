import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { Chart_Component } from './chart/chart.component';
import { FormsModule } from '@angular/forms';
import { ToggelGraphListComponent } from './toggel-graph-list/toggel-graph-list.component';
import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    Chart_Component,
    ToggelGraphListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    FormsModule,
    ChartAllModule,
     RangeNavigatorAllModule, 
     BrowserModule,
      ButtonModule,
      AccumulationChartAllModule,
       NumericTextBoxModule,
        DatePickerModule,
        ProgressBarModule,
        DropDownListAllModule,
        ChartModule,
        NgbModule,
        NgbPaginationModule,
         NgbAlertModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
