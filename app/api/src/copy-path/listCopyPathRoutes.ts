
import { Router } from "express";
import * as fs from "fs";
import { AppDataSource } from "../data-source";
import { CopyPath } from "../entity/copyPath";
const router = Router();

let store!: CopyPath[];

fs.readFile("./src/test.json", "utf8", (err, data) => {
  if (err) {
    console.error("Failed to read file", err);
  } else {
    store = JSON.parse(data);
  }
});

router.get("/list", async (req, res) => {
  const data = await AppDataSource.manager.find(CopyPath);
  if (!data) {
    res.status(500).json({ error: "Failed to read file" });
    return;
  }

  res.json(data);
});

export default router;
