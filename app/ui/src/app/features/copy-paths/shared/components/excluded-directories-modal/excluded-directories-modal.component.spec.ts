import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExcludedDirectoriesModalComponent } from "./excluded-directories-modal.component";

describe("ExcludedDirectoriesModalComponent", () => {
    let component: ExcludedDirectoriesModalComponent;
    let fixture: ComponentFixture<ExcludedDirectoriesModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExcludedDirectoriesModalComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(
            ExcludedDirectoriesModalComponent
        );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
