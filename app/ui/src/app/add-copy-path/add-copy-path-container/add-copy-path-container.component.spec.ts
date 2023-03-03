import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddCopyPathContainerComponent } from "./add-copy-path-container.component";

describe("AddCopyPathContainerComponent", () => {
    let component: AddCopyPathContainerComponent;
    let fixture: ComponentFixture<AddCopyPathContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddCopyPathContainerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AddCopyPathContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
