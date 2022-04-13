import { NgModule } from '@angular/core';
import { ObservationTabPage } from './observation.tab';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild([{ component: ObservationTabPage, path: '' }])]
})
export class ObservationRoutingModule { }
