import { CopyPath } from "./copyPath";
import { Router } from "express";
import * as fs from "fs";
const router = Router();

let store!: CopyPath[];

fs.readFile("./src/test.json", "utf8", (err, data) => {
  if (err) {
    console.error("Failed to read file", err);
  } else {
    store = JSON.parse(data);
  }
});

router.get("/list", (req, res) => {
  if (!store) {
    res.status(500).json({ error: "Failed to read file" });
    return;
  }

  res.json(store);
});

export default router;
