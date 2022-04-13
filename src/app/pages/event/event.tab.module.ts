import { CommonModule } from "@angular/common";
import { ComponentModule } from "src/app/component/component.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { EventDetailComponent } from "./component/detail/event.detail";
import { EventRoutingModule } from "./event.tab.routing";
import { EventTabPage } from "./event.tab";
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  declarations: [EventDetailComponent, EventTabPage],
  imports: [CommonModule, ComponentModule, FormsModule, IonicModule, EventRoutingModule, ReactiveFormsModule, SuperTabsModule]
})
export class EventTabModule { }
