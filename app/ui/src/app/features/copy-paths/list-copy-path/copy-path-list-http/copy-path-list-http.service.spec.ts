import { TestBed } from "@angular/core/testing";
import { provideHttpClientTesting } from "@angular/common/http/testing"
import { CopyPathListHttpService } from "./copy-path-list-http.service";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

describe("CopyPathListHttpService", () => {
    let service: CopyPathListHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [], providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()] });
        service = TestBed.inject(CopyPathListHttpService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
