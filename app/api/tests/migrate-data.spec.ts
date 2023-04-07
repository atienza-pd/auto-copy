import * as src from "../src/migrate-data";
import * as fs from "fs";
import data from "../src/test.json";


jest.mock("fs", () => ({
    readFileSync: jest.fn(),
  }));

describe("read-json-data", () => {

  test("Spy test", () => {
    let json = JSON.stringify(data);
    const spy = jest.spyOn(fs, "readFileSync");
    spy.mockReturnValue(json);
    expect(src.readJsonToMigrate()).toEqual(json);
  });
});
