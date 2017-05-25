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
  groups: any[];

  newRobots: boolean = false;
  selectedGroupForNewRobots = 'ungroupedRobots';
  regroup: boolean = false;
  selectedGroupForChange = 'ungroupedRobots';
  newGroup: any = '';


  

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

  toggleRobotsInGroup($event, group){
      for(let robot of group.robots){
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
  removeRobots(): void{
    for (let group of this.groups){
      
      for (var i = 0; i < group.robots.length; i++) {
        var robot = group.robots[i];

        if (robot.isSelected) {
          //  robot.name 

          let _robo = this.robots.find(x =>x.name === robot.name);
          _robo.tasks = '';
          _robo.isSelected = false;
          console.log(_robo.name + ' with index : deleted');
          

          group.robots.splice(i, 1);

          

          i--;
        }
      }
    }
    this.deleteEmptyGroups();
  }
  openNewRobots(){
    // console.log('opening new robots window');
    this.newRobots = true;
  }


  addRobots(){
    let _groupIndex = this.groups.findIndex(x => x.name === this.selectedGroupForNewRobots);
    console.log(_groupIndex);


    for(let robot of this.robots){
        if(!robot.tasks && robot.isSelected){

          robot.group= this.selectedGroupForNewRobots;
          robot.tasks= 'A';
          
          console.log('adding ' + robot.name);
          console.log('with group: ' + this.selectedGroupForNewRobots);
          this.groups[_groupIndex]['robots'].push(robot);     

          robot.isSelected = false;
        }
    }
    this.newRobots = false;
    this.selectedGroupForNewRobots = 'ungroupedRobots';

  }

  assignRobotsToGroup(){
    console.log('new group assigned to selected robots is: ' + this.selectedGroupForChange);
    let _groupIndex = this.groups.findIndex(x => x.name === this.selectedGroupForChange);

    for (let group of this.groups){
      
      for (var i = 0; i < group.robots.length; i++) {
        var robot = group.robots[i];

        if (robot.isSelected) {
          //  robot.name 

          let _robo = this.robots.find(x =>x.name === robot.name);
          _robo.group = this.selectedGroupForChange;
          _robo.isSelected = false;
          this.groups[_groupIndex].robots.push(_robo);

          console.log(_robo.name + ' is now part of: ' + this.selectedGroupForChange);
          

          group.robots.splice(i, 1);

          

          i--;
        }
      }
    }
    this.regroup = false;
    this.newGroup = '';
  }

  createGroup(){
    this.groups.push(new Group(this.newGroup, true, []));
    this.selectedGroupForChange = this.newGroup;
    this.assignRobotsToGroup();
    this.regroup = false;
    this.newGroup = '';
  }

  deleteEmptyGroups(){
    for (var i = 0; i < this.groups.length; i++) {
        var group = this.groups[i];

        if (group.name != 'ungroupedRobots' && !group.robots.length) {
          //  robot.name 

          

          console.log('deleting group: ' + group.name);
          

          this.groups.splice(i, 1);

          

          i--;
        }
      }

  }


  makeGroups(grobots) {

    let groups = [];
    groups.push(new Group("ungroupedRobots", true, []));

    for (let robot of grobots) {

      // A robot must have a task in order to be active an be included in the table

      
      //if the robot has a group, loop through all the groups to see if robot's group matches any

              // if we find a match, add the robot to that group's array of robots

              // if no match, it means the robot has a group that's not been encountered already,
              // so we add a new group and put the robot in this new group

      // if the robot doesn't have a group, we add the robot into the 'ungroupedRobots' group


      if (robot.group && robot.tasks) {

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
      else if(robot.tasks) {
        groups[0].robots.push(robot);
      }

      //end of for loop  
    }

    this.groups = groups;

  }





  ngOnInit() {
    this.getRobots();
    this.getRobotProperties(new Robot);

  }

}
