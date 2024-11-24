import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EditCopyPathContainerComponent } from "./edit-copy-path-container.component";
import { GetOneCopyPathHttpService } from "../get-one-copy-path-http/get-one-copy-path-http.service";
import { EditCopyPathHttpService } from "../edit-copy-path-http/edit-copy-path-http.service";
import { ActivatedRoute } from "@angular/router";

const fakeActivatedRoute = {
    snapshot:{
        paramMap:{
            get: jasmine.createSpy().and.returnValue('1')
        }
    }
}
describe("EditCopyPathContainerComponent", () => {
    let component: EditCopyPathContainerComponent;
    let fixture: ComponentFixture<EditCopyPathContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EditCopyPathContainerComponent],
            providers: [{provide:GetOneCopyPathHttpService, useValue: {}},
                {provide:EditCopyPathHttpService, useValue: {}},
            {provide: ActivatedRoute, useValue: fakeActivatedRoute}
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(EditCopyPathContainerComponent);
        component = fixture.componentInstance;

    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
