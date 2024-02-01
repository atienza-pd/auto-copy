import * as src from "../src/copy-path/addCopyPathRoutes";
import { CopyPathDto } from "../src/copy-path/copyPathDto";
import * as saveCopyPathRepo from "../src/copy-path/saveCopyPathRepo";

describe("add-copy-path-route", () => {
  test("SetValue", () => {
    const input: CopyPathDto = {
      name: "name",
      source: "source",
      destination: "distination",
      includeFilesOnly: [],
      excludeDirectories: [],
      excludeFiles: [],
      activeDaysOfWeek: [],
    } as unknown as CopyPathDto;
    expect(src.setValue(input).id).toEqual(0);
    expect(src.setValue(input).name).toEqual(input.name);
    expect(src.setValue(input).source).toEqual(input.source);
    expect(src.setValue(input).destination).toEqual(input.destination);
    expect(src.setValue(input).includeFiles).toEqual(
      JSON.stringify(input.includeFilesOnly)
    );
    expect(src.setValue(input).excludedDirectories).toEqual(
      JSON.stringify(input.excludeDirectories)
    );
    expect(src.setValue(input).excludedFiles).toEqual(
      JSON.stringify(input.excludeFiles)
    );
    expect(src.setValue(input).activeDaysOfWeek).toEqual(
      JSON.stringify(input.activeDaysOfWeek)
    );
  });
  test("Add Copy Path", async () => {
    const spy = jest.spyOn(saveCopyPathRepo, "execute");
    const dto: CopyPathDto = 
      {
        id: 0,
        name: "test",
        source: "destination",
        destination: "",
        includeFilesOnly: [],
        excludeDirectories: [],
        excludeFiles: [],
        activeDaysOfWeek: []
      } as unknown as CopyPathDto;
    spy.mockReturnValue(Promise.resolve());
    src.add(dto);
    expect(spy).toBeCalled();
  });
});
