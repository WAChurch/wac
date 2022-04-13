import { CommonModule } from "@angular/common";
import { ComponentModule } from "src/app/component/component.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { ObservationDetailComponent } from "./component/detail/observation.detail";
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { ObservationTabPage } from "./observation.tab";
import { ObservationRoutingModule } from "./observation";

@NgModule({
  declarations: [ObservationDetailComponent, ObservationTabPage],
  imports: [CommonModule, ComponentModule, FormsModule, IonicModule, ObservationRoutingModule, ReactiveFormsModule, SuperTabsModule]
})
export class ObservationTabModule { }
