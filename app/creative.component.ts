import { Component, Input } from '@angular/core';
import { Creative } from './creative';

@Component({
  selector: 'creative-detail',
  template: `
    <div>
      <h2 *ngIf="creative">{{creative.name}}</h2>
    </div>
  `
})
export class CreativeComponent {
  creative: Creative;
}