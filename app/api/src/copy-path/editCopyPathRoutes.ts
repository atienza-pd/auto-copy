import { CopyPathDto } from "./copyPath";
import { Router } from "express";
import * as fs from "fs";
const router = Router();

let store!: CopyPathDto[];

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

router.put("/edit/:id", (req, res) => {
  const id: string = req.params.id;
  const editedData: CopyPathDto = req.body;
  const reqId: string = JSON.stringify(req.body.id);

  if (id !== reqId) {
    res.status(422).json({ error: "Request and Body Id not match" });
    return;
  }

  if (!editedData) {
    res.status(400).json({ error: "No data provided" });
    return;
  }

  const foundIndex = store.findIndex((x) => x.id == parseInt(id));

  if (foundIndex == -1) {
    res.status(422).json({ error: "Record not found" });
    return;
  }

  const index = store.findIndex((x) => x.id === editedData.id);
  store[index] = { ...editedData };
  updateFile(store, (err, updatedStore) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json("edited");
  });
});

export default router;
