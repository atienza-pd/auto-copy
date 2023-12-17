import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddCopyPathContainerComponent } from "./add-copy-path-container.component";
import { AddCopyPathHttpService } from "../add-copy-path-http/add-copy-path-http.service";

describe("AddCopyPathContainerComponent", () => {
    let component: AddCopyPathContainerComponent;
    let fixture: ComponentFixture<AddCopyPathContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddCopyPathContainerComponent],
            providers: [{provide: AddCopyPathHttpService, useValue:{}}]
        }).compileComponents();

        fixture = TestBed.createComponent(AddCopyPathContainerComponent);
        component = fixture.componentInstance;
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
