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

const updateFile = (data, callback) => {
  fs.writeFile("./src/test.json", JSON.stringify(data), (err) => {
    if (err) {
      callback({ error: "Failed to update file" }, null);
    } else {
      callback(null, data);
    }
  });
};

router.post("/add", (req, res) => {
  const copyPath: CopyPath = req.body;
  if (!copyPath) {
    res.status(400).json({ error: "No data provided" });
  }
  copyPath.id = store.length + 1;
  store.push(copyPath);
  updateFile(store, (err, updatedStore) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(201).json("added");
    }
  });
});

export default router;
