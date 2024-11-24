import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EditBuildJsonLocationModalComponent } from "./edit-build-json-location-modal.component";

describe("EditBuildJsonLocationModalComponent", () => {
    let component: EditBuildJsonLocationModalComponent;
    let fixture: ComponentFixture<EditBuildJsonLocationModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EditBuildJsonLocationModalComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(EditBuildJsonLocationModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
