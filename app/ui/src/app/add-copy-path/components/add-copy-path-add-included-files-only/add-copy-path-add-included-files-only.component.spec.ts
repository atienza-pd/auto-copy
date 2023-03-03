import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddCopyPathAddIncludedFilesOnlyComponent } from "./add-copy-path-add-included-files-only.component";

describe("AddCopyPathAddIncludedFilesOnlyComponent", () => {
    let component: AddCopyPathAddIncludedFilesOnlyComponent;
    let fixture: ComponentFixture<AddCopyPathAddIncludedFilesOnlyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddCopyPathAddIncludedFilesOnlyComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(
            AddCopyPathAddIncludedFilesOnlyComponent
        );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
