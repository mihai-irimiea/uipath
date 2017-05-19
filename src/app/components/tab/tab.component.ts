import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent  } from '../tabs/tabs.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  icons = [
    
  ];

  active = false;

  @Input() tabTitle: string;
  @Input() tabIcon: string;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }

  ngOnInit() {
  }

}
