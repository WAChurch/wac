import { Alert } from './tool/alert';
import { Component } from '@angular/core';
import { Http } from './tool/http';
import { Menu } from './tool/dto';
import { MenuController } from '@ionic/angular';
import { Parameter } from './tool/static';

@Component({ selector: 'app-root', styleUrls: ['app.component.scss'], templateUrl: 'app.component.html' })
export class AppComponent {
  public menu: Menu[] = [{
    icon: "people-outline",
    selected: true,
    title: "Personas",
    url: 'person'
  }, {
    icon: "calendar-outline",
    selected: false,
    title: "Eventos",
    url: 'event'
  }, {
    icon: "receipt-outline",
    selected: false,
    sub: 'Peticiones de oración',
    title: "Observaciones",
    url: 'observation'
  }];
  public wait: boolean;

  constructor(private controller: MenuController) { Parameter.getWait().subscribe(observer => this.wait = observer) }

  public select(url: string) {
    this.controller.close();
    this.menu.forEach(m => m.selected = m.url === url);
  }
  public version() { return Http.VERSION }
}
