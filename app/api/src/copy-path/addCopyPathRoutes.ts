import { CopyPathDto } from "./copyPathDto";
import { Router } from "express";
import * as fs from "fs";
import { AppDataSource } from "../data-source";
import { CopyPath } from "../entity/copyPath";
const router = Router();

const repo = AppDataSource.getRepository(CopyPath);

router.post("/add", async (req, res) => {
  const copyPathDto: CopyPathDto = req.body;
  if (!copyPathDto) {
    res.status(400).json({ error: "No data provided" });
  }

  const copyPath = new CopyPath();
  copyPath.name = copyPathDto.name;
  copyPath.source = copyPathDto.source;
  copyPath.destination = copyPathDto.destination;
  copyPath.includeFiles = JSON.stringify(copyPathDto.includeFilesOnly);
  await repo.save(copyPath);
  res.status(201).json("added");
});

export default router;
