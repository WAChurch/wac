import { Component, Input } from "@angular/core";
import { Option } from "src/app/tool/dto";

@Component({ selector: 'app-popover-select', templateUrl: 'select.popover.component.html' })
export class SelectPopoverComponent<V> {
    @Input() public options: Option<V>[];
    @Input() public select: (option: V) => void;

    public selectInternal(option: V) { this.select(option) }
}