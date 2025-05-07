import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FileFormModalComponent } from "./file-form-modal.component";

describe("FileFormModalComponent", () => {
    let component: FileFormModalComponent;
    let fixture: ComponentFixture<FileFormModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FileFormModalComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(
            FileFormModalComponent
        );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
