import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CopyPathMenuControlComponent } from "./copy-path-menu-control.component";

describe("CopyPathMenuControlComponent", () => {
    let component: CopyPathMenuControlComponent;
    let fixture: ComponentFixture<CopyPathMenuControlComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CopyPathMenuControlComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CopyPathMenuControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
