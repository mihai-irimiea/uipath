export class Robot {

    name: string;
    machine: string;
    tasks: string;
    description: string;
    group: string;
    isSelected: boolean;
    isActive: boolean;
    constructor(){
        this.name = "";
        this.machine = "";
        this.description = "";
        this.group = "";
        this.isSelected = false;
        this.isActive = false;
    }
}

export class Group{
    name: string;
    isExpanded: boolean;
    robots: Robot;

    
    constructor(name, isExpanded, robots){
        this.name = name;
        this.isExpanded = isExpanded;
        this.robots = robots;

    }

}