import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EditCopyPathFormComponent } from "./edit-copy-path-form.component";

describe("EditCopyPathFormComponent", () => {
    let component: EditCopyPathFormComponent;
    let fixture: ComponentFixture<EditCopyPathFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EditCopyPathFormComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(EditCopyPathFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
