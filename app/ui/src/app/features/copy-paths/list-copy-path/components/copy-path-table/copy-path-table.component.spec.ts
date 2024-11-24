import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CopyPathTableComponent } from "./copy-path-table.component";

describe("CopyPathTableComponent", () => {
    let component: CopyPathTableComponent;
    let fixture: ComponentFixture<CopyPathTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CopyPathTableComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CopyPathTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
