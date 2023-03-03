import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EditCopyPathContainerComponent } from "./edit-copy-path-container.component";

describe("EditCopyPathContainerComponent", () => {
    let component: EditCopyPathContainerComponent;
    let fixture: ComponentFixture<EditCopyPathContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EditCopyPathContainerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(EditCopyPathContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
