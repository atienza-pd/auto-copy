import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { Observable } from "rxjs";
import { BuildCopyPathJsonHttpService } from "../../build-copy-path-json-http/build-copy-path-json-http.service";

@Component({
    selector: "app-copy-path-menu-control",
    templateUrl: "./copy-path-menu-control.component.html",
    styleUrls: ["./copy-path-menu-control.component.scss"],
})
export class CopyPathMenuControlComponent {
    @Output() showEditBuildJsonLocationModal = new EventEmitter();
    @Input() location$!: Observable<string>;
    constructor(
        private buildJsonHttp: BuildCopyPathJsonHttpService,
        private message: NzMessageService
    ) {}
    onBuildJson() {
        this.buildJsonHttp.execute().subscribe(() => {
            this.message.info("Building Json Succeed");
        });
    }

    onShowEditBuildJsonLocationModal() {
        this.showEditBuildJsonLocationModal.emit();
    }
}
