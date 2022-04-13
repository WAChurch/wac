import { CommonModule } from "@angular/common";
import { ComponentModule } from "src/app/component/component.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { PersonDetailComponent } from "./component/detail/person.detail";
import { PersonRoutingModule } from "./person.tab.routing";
import { PersonTabPage } from "./person.tab";
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { ContactDetailComponent } from "../contact/detail/contact.detail";
import { ParticularDetailComponent } from "../particular/detail/particular.detail";

@NgModule({
  declarations: [ContactDetailComponent, ParticularDetailComponent, PersonDetailComponent, PersonTabPage],
  imports: [CommonModule, ComponentModule, FormsModule, IonicModule, PersonRoutingModule, ReactiveFormsModule, SuperTabsModule]
})
export class PersonTabModule { }
