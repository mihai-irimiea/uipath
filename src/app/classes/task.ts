export class Task {
    name: string;
    status: boolean;
    robots: string[];
    started: string;
    ended: string;
    schedule: string;
    info: string;
    constructor(){
        this.name = "";
        this.status = true;
        this.robots = [];
        this.started = "";
        this.ended = "";
        this.schedule = "";
        this.info = "";
    }
}
