import { NgModule } from '@angular/core';
import { PersonTabPage } from './person.tab';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild([{ component: PersonTabPage, path: '' }])]
})
export class PersonRoutingModule { }
