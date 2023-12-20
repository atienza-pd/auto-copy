import { CopyPathDto } from "./copyPathDto";
import { Router } from "express";
import { CopyPath } from "../entity/copyPath.entity";
import * as saveCopyPathRepo  from "./saveCopyPathRepo"
const router = Router();

export function setValue(input: CopyPathDto): CopyPath {
  return {
    ...input,
    id: 0,
    includeFiles: JSON.stringify(input.includeFilesOnly),
    excludedDirectories: JSON.stringify(input.excludeDirectories),
    excludedFiles: JSON.stringify(input.excludeFiles),
    activeDaysOfWeek: JSON.stringify(input.activeDaysOfWeek),
  };
}

export async function add(copyPathDto : CopyPathDto){
    const value = setValue(copyPathDto);
    await saveCopyPathRepo.execute(value);
}

router.post("/add", async (req, res) => {
  try {
    const copyPathDto: CopyPathDto = req.body;
    if (!copyPathDto) {
      res.status(422).json({ error: "No data provided" });
    }

    await add(copyPathDto)
    res.status(201).json("added");
  } catch (error) {
    res.status(400).json();
  }
});

export default router;
