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

router.delete("/remove/:id", (req, res) => {
  const id: number = parseInt(req.params.id);

  const foundIndex = store.findIndex((x) => x.id == id);

  if (foundIndex == -1) {
    res.status(422).json({ error: "Record not found" });
    return;
  }

  store.splice(foundIndex, 1);

  updateFile(store, (err, updatedStore) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json("deleted");
  });
});

export default router;
