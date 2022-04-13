import { ChooseComponent } from "./page/choose/choose.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./page/header/header.component";
import { IonicModule } from "@ionic/angular";
import { ListComponent } from "./page/list/list.component";
import { NgModule } from "@angular/core";
import { SelectPopoverComponent } from "./select/select.popover.component";

@NgModule({
    declarations: [ChooseComponent, HeaderComponent, ListComponent, SelectPopoverComponent],
    exports: [ChooseComponent, HeaderComponent, ListComponent, SelectPopoverComponent],
    imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule]
})
export class ComponentModule { }