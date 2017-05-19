import { Task } from './task';
export const TASKS: Task[] =[
    {
        "name": "check email for new documents",
        "status": true,
        "robots": ['Sparky'],
        "started": "3h ago",
        "ended": "2h ago",
        "schedule": "grey",
        "info": "more info"
    },
    {
        "name": "checking account server",
        "status": false,
        "robots": ['Someboty'],
        "started": "3h ago",
        "ended": "2h ago",
        "schedule": "green",
        "info": "more info"
    },
    {
        "name": "scraping and analysis",
        "status": true,
        "robots": ['Someboty','Sparky'],
        "started": "1h ago",
        "ended": "1h ago",
        "schedule": "red",
        "info": "more info"
    },
    {
        "name": "archiving",
        "status": true,
        "robots": ['Slobot'],
        "started": "12h ago",
        "ended": "12h ago",
        "schedule": "grey",
        "info": "more info"
    }
];
