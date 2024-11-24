import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddCopyPathFormComponent } from "./add-copy-path-form.component";

describe("AddCopyPathFormComponent", () => {
    let component: AddCopyPathFormComponent;
    let fixture: ComponentFixture<AddCopyPathFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddCopyPathFormComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AddCopyPathFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
