import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FormEditorComponent } from "./form-editor.component";

describe("FormEditorComponent", () => {
    let component: FormEditorComponent;
    let fixture: ComponentFixture<FormEditorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FormEditorComponent],
          
        }).compileComponents();

        fixture = TestBed.createComponent(FormEditorComponent);
        component = fixture.componentInstance;
        
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
