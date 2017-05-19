import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../classes/task';

@Component({
  selector: '[task]',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input()
  task = Task;
  @Input()
  properties = [];

  constructor() { }

  ngOnInit() {
  }

}
