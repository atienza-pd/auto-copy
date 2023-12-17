import { TestBed } from "@angular/core/testing";

import { BuildCopyPathJsonHttpService } from "./build-copy-path-json-http.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("BuildCopyPathJsonHttpService", () => {
    let service: BuildCopyPathJsonHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
        service = TestBed.inject(BuildCopyPathJsonHttpService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
