import { Component, OnInit } from '@angular/core';
import { Robot } from '../../classes/robot';
import { Group } from '../../classes/robot';
import { RobotsService } from '../../services/robots.service';

@Component({
  selector: 'resource-robots',
  templateUrl: './resource-robots.component.html',
  styleUrls: ['./resource-robots.component.scss'],
  providers: [RobotsService]
})
export class ResourceRobotsComponent implements OnInit {

  icon = "android";
  robots: Robot[];
  properties = [];
  groups: Group[];

  testRobots: Robot[];
  

  constructor(private robotsService: RobotsService) { }

  getRobots(): void {
    this.robotsService.getRobots().then(robots => { this.robots = robots; return robots; }).then(val => this.makeGroups(val));
  }

  getRobotProperties(obj): void {
    for (let prop in obj) {
      this.properties.push(prop);
    }

  }

  handleSelection($event) {
    for (let robot of this.robots) {
      robot.isSelected = $event.target.checked;
    }
  }


  sortBy(sortString) {
    this.robots.sort(function (name1, name2) {
      if (name1[sortString] < name2[sortString]) {
        return -1;
      } else if (name1[sortString] > name2[sortString]) {
        return 1;
      } else {
        return 0;
      }
    });

  }

  makeGroups(grobots) {

    let groups = [];
    groups.push(new Group("ungroupedRobots", true, []));

    for (let robot of grobots) {

      //let's create' an empty group object each time we loop a new robot, in case we need to add new group in the groupes list
      // let obj = {
      //   //name will be added later
      //   "visible": false,
      //   "robots": []
      // }

      //if the robot has a group, loop through all the groups to see if robot's group matches any

              // if we find a match, add the robot to that group's array of robots

              // if no match, it means the robot has a group that's not been encountered already,
              // so we add a new group and put the robot in this new group

      // if the robot doesn't have a group, we add the robot into the 'ungroupedRobots' group


      if (robot.group) {

        let robotHasNewGroup = true;

        for (let group of groups) {
          // If we find the robot's group name exists in groups, push the robot in that object's robots
          if (robot.group === group.name) {
            group.robots.push(robot);

            //The assumption the robot had a new group was false
            robotHasNewGroup = false;
          }
        }


        if (robotHasNewGroup) {
          groups.push(new Group(robot.group, true, [robot]));
        }


      }
      else {
        groups[0].robots.push(robot);
      }

      //end of for loop  
    }

    this.groups = groups;
    this.testRobots = grobots;

  }


  ngOnInit() {
    this.getRobots();
    this.getRobotProperties(new Robot);

  }

}
