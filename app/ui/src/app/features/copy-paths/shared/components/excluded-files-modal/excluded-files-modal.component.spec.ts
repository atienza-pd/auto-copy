import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExcludedFilesModalComponent } from "./excluded-files-modal.component";

describe("ExcludedFilesModalComponent", () => {
    let component: ExcludedFilesModalComponent;
    let fixture: ComponentFixture<ExcludedFilesModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExcludedFilesModalComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(
            ExcludedFilesModalComponent
        );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
