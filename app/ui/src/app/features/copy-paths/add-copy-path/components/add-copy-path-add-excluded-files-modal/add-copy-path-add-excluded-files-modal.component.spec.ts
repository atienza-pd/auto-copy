import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddCopyPathAddExcludedFilesModalComponent } from "./add-copy-path-add-excluded-files-modal.component";

describe("AddCopyPathAddExcludedFilesModalComponent", () => {
    let component: AddCopyPathAddExcludedFilesModalComponent;
    let fixture: ComponentFixture<AddCopyPathAddExcludedFilesModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddCopyPathAddExcludedFilesModalComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(
            AddCopyPathAddExcludedFilesModalComponent
        );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
