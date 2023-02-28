import { CopyPathDto } from "./copyPathDto";

import { Router } from "express";
import * as fs from "fs";
import { AppDataSource } from "../data-source";
import { CopyPath } from "../entity/copyPath";
const router = Router();

let store!: CopyPath[];

router.get("/list", async (req, res) => {
  const data = await AppDataSource.manager.find(CopyPath);
  if (!data) {
    res.status(500).json({ error: "Failed to read file" });
    return;
  }

  const copyPathsDto : CopyPathDto[] = data.flatMap((x: CopyPath) => ({
    id: x.id,
    name: x.name,
    source: x.source,
    destination: x.destination,
    includeFilesOnly: JSON.parse(x.includeFiles),
    excludeDirectories: [],
    excludeFiles: []
  }));

  res.json(copyPathsDto);
});

export default router;
