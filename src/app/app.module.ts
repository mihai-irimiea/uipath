import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './components/department/department.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { TaskComponent } from './components/task/task.component';
import { RobotComponent } from './components/robot/robot.component';
import { ResourceRobotsComponent } from './components/resource-robots/resource-robots.component';
import { ResourceTasksComponent } from './components/resource-tasks/resource-tasks.component';
import { ResourceInvoicesComponent } from './components/resource-invoices/resource-invoices.component';
import { ResourceMapsComponent } from './components/resource-maps/resource-maps.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { ResourceQueuesComponent } from './components/resource-queues/resource-queues.component';
import { ResourceAssetsComponent } from './components/resource-assets/resource-assets.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ResourcesComponent,
    TaskComponent,
    RobotComponent,
    ResourceRobotsComponent,
    ResourceTasksComponent,
    ResourceInvoicesComponent,
    ResourceMapsComponent,
    TabsComponent,
    TabComponent,
    ResourceQueuesComponent,
    ResourceAssetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
