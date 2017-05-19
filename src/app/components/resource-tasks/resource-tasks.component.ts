import { Component, OnInit } from '@angular/core';
import { Task } from '../../classes/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'resource-tasks',
  templateUrl: './resource-tasks.component.html',
  styleUrls: ['./resource-tasks.component.scss'],
  providers: [TasksService]
})
export class ResourceTasksComponent implements OnInit {
  icon = "play_circle_outline";
  tasks: Task[];
  properties = [];

  constructor(private tasksService: TasksService) {
    
   }
   getTasks(): void {
     this.tasksService.getTasks().then(tasks => this.tasks = tasks);
   }
   getProperties(obj): void{
    for (let prop in obj){
      this.properties.push(prop);
    }

  }

  ngOnInit() {
    this.getTasks();
    this.getProperties(new Task);
  }

}
