import { Injectable } from '@angular/core';
import { Task } from '../classes/task';
import { TASKS } from '../classes/data-tasks';

@Injectable()
export class TasksService {

  constructor() { }
  getTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS);
  }

}
