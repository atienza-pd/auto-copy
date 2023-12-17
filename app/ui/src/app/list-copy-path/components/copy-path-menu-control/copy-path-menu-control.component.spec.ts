import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CopyPathMenuControlComponent } from "./copy-path-menu-control.component";
import { BuildCopyPathJsonHttpService } from "../../build-copy-path-json-http/build-copy-path-json-http.service";
import { AppModule } from "src/app/app.module";

describe("CopyPathMenuControlComponent", () => {
    let component: CopyPathMenuControlComponent;
    let fixture: ComponentFixture<CopyPathMenuControlComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CopyPathMenuControlComponent],
            imports: [AppModule],
            providers: [{provide: BuildCopyPathJsonHttpService, useValue: {}}]
        }).compileComponents();

        fixture = TestBed.createComponent(CopyPathMenuControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
