import * as fs from "fs";
import { AppDataSource } from "./data-source";
import { BuildJsonLocation } from "./entity/buildJsonLocation";
import { Not } from "typeorm";
import { CopyPath } from "./entity/copyPath";
import { CopyPathDto } from "./copy-path/copyPathDto";

const repo = AppDataSource.getRepository(BuildJsonLocation);
const copyPathRepo = AppDataSource.getRepository(CopyPath);

  export async function readPathsJsonFileToObject() {
    const location = await repo.findOne({ where: { location: Not("") } });
    let rawdata = fs.readFileSync(location.location);
    let data = JSON.parse(rawdata.toString());
    return data;
  }

  export async function checkIfTableHasData() {
    const list = await copyPathRepo.find();
    return list.length > 0;
  }

  export async function migrate(){
    const list = await readPathsJsonFileToObject();
    const hasData = await checkIfTableHasData();
    if(!hasData){
      list.forEach(async (data : CopyPathDto) =>  {
        const copyPath = new CopyPath();
        copyPath.name = data.name;
        copyPath.source = data.source;
        copyPath.destination = data.destination;
        copyPath.includeFiles = JSON.stringify(data.includeFilesOnly);
        copyPath.excludedDirectories = JSON.stringify(
            data.excludeDirectories
        );
        copyPath.excludedFiles = JSON.stringify(data.excludeFiles);
        copyPath.activeDaysOfWeek = JSON.stringify(data.activeDaysOfWeek);
        await copyPathRepo.save(copyPath);
      });
    }
    console.log("Data has been migrated");
  }
