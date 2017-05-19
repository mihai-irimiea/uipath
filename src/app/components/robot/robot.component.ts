import { Component, OnInit, Input } from '@angular/core';
import { Robot } from '../../classes/robot';

@Component({
  selector: '[robot]',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent implements OnInit {
  @Input()
  robot = Robot;
  @Input()
  properties = [];


  constructor() { }

  ngOnInit() {
  }

}
