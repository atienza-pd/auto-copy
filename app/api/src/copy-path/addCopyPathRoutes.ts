import { CopyPathDto } from "./copyPath";
import { Router } from "express";
import * as fs from "fs";
import { AppDataSource } from "../data-source";
import { CopyPath } from "../entity/copyPath";
const router = Router();

const repo = AppDataSource.getRepository(CopyPath)

router.post("/add", async (req, res) => {
  const copyPath: CopyPathDto = req.body;
  if (!copyPath) {
    res.status(400).json({ error: "No data provided" });
  }
  await repo.save(copyPath);
  res.status(201).json("added");
});

export default router;
