import { Component, OnInit } from '@angular/core';
import { Creative } from './creative';
import { CreativeComponent } from './creative.component';
import { Schedule } from './schedule';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'web-player',
  template: `
    <h1>My First Angular 2 Application</h1>
    <div *ngIf="schedule">
      <creative-detail *ngFor="let creative of schedule.creatives" [creative]="creative"></creative-detail>
    </div>`,
  directives: [CreativeComponent],
  providers: [ScheduleService]
})
export class AppComponent implements OnInit {
    schedule: Schedule;

    constructor(private scheduleService: ScheduleService) { }

    getSchedule() {
        this.scheduleService.getSchedule().then(s => this.schedule = s);
    }

    ngOnInit() {
        this.getSchedule();
    }
}
