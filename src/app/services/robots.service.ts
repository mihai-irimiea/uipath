import { Injectable } from '@angular/core';
import { Robot } from '../classes/robot';
import { ROBOTS } from '../classes/data-robots';

@Injectable()
export class RobotsService {

  robotGroups= [];


  makeRobots(){
    for(let robot of ROBOTS){
      if (robot.group){
        if(this.robotGroups.indexOf(robot.group) == -1){
          this.robotGroups.push(robot.group);
        }
      } else{
        if(this.robotGroups.indexOf('nogroup') == -1){
          this.robotGroups.push('nogroup');
        }
      }
    }
  }
  

  constructor() { }
  getRobots(): Promise<Robot[]> {
    return Promise.resolve(ROBOTS);
  }

}
