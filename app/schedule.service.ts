import { Injectable } from '@angular/core';
import { Schedule } from './schedule';
import { Creative } from './creative';

export var CREATIVES: Creative[] = [
    {
        id: 1,
        name: 'creative A'
    }
];
export var SCHEDULE: Schedule = {
    creatives: CREATIVES
};

@Injectable()
export class ScheduleService {
    getSchedule() {
        return Promise.resolve(SCHEDULE);
    }
}