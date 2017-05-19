import { Component, OnInit } from '@angular/core';
import { Robot } from '../../classes/robot';
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

  constructor(private robotsService: RobotsService) { }

  getRobots(): void {
    this.robotsService.getRobots().then(robots => this.robots = robots);
  }

  getRobotProperties(obj): void{
    for (let prop in obj){
      this.properties.push(prop);
    }

  }

  handleSelection($event){
    for( let robot of this.robots){
      robot.isSelected = $event.target.checked;
    }
  }

  
  sortBy(sortString){    
    this.robots.sort( function(name1, name2) {
	    if ( name1[sortString] < name2[sortString] ){
	    	return -1;
	    }else if( name1[sortString] > name2[sortString] ){
	        return 1;
	    }else{
	    	return 0;
	    }
	});
    
  }


  ngOnInit() {
    this.getRobots();
    this.getRobotProperties(new Robot);
    
    
  }

}
