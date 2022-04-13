import { NgModule } from '@angular/core';
import { EventTabPage } from './event.tab';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild([{ component: EventTabPage, path: '' }])]
})
export class EventRoutingModule { }
