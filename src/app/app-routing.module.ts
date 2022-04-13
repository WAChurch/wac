import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(
      [
        { loadChildren: () => import('./pages/event/event.tab.module').then(onfulfilled => onfulfilled.EventTabModule), path: 'event' },
        { loadChildren: () => import('./pages/observation/observation.tab.module').then(onfulfilled => onfulfilled.ObservationTabModule), path: 'observation' },
        { loadChildren: () => import('./pages/person/person.tab.module').then(onfulfilled => onfulfilled.PersonTabModule), path: 'person' },
        { path: '', pathMatch: 'full', redirectTo: 'person' },
      ],
      { preloadingStrategy: PreloadAllModules })
  ],
})
export class AppRoutingModule { }
