
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

  res.json(data);
});

export default router;
