import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({ standalone: false,
    selector: "app-edit-build-json-location-modal",
    templateUrl: "./edit-build-json-location-modal.component.html",
    styleUrls: ["./edit-build-json-location-modal.component.scss"],
})
export class EditBuildJsonLocationModalComponent {
    @Output() hide = new EventEmitter();
    @Output() ok = new EventEmitter();
    @Input() show!: boolean;
    @Input() location = "";

    handleOk() {
        this.ok.emit(this.location);
    }
    handleCancel() {
        this.hide.emit();
    }
}
