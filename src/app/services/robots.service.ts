import { Injectable } from '@angular/core';
import { Robot } from '../classes/robot';
import { ROBOTS } from '../classes/data-robots';

@Injectable()
export class RobotsService {

  constructor() { }
  getRobots(): Promise<Robot[]> {
    return Promise.resolve(ROBOTS);
  }

}
