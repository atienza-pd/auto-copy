import { ComponentFixture, TestBed } from "@angular/core/testing";

import { IncludedFilesModalComponent } from "./included-files-modal.component";

describe("IncludedFilesModalComponent", () => {
    let component: IncludedFilesModalComponent;
    let fixture: ComponentFixture<IncludedFilesModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IncludedFilesModalComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(
            IncludedFilesModalComponent
        );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
