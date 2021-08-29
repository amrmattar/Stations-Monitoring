import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidenavComponent implements OnInit {
  public isopen:boolean=false;
  type:any = "Push"
    @ViewChild('dockBar') dockBar: SidebarComponent;
    public enableDock: boolean = true;
    public width: string = '220px';
    public dockSize: string = '72px';
    
  constructor() {

   }

  ngOnInit(): void {  }
toggleClick() {
        this.dockBar.toggle();
    }
}
