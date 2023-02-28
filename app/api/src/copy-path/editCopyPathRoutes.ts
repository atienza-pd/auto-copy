import { CopyPath } from "./../entity/copyPath";
import { CopyPathDto } from "./copyPath";
import { Router } from "express";
import { AppDataSource } from "../data-source";
const router = Router();

const repo = AppDataSource.getRepository(CopyPath);

router.put("/edit/:id", async (req, res) => {
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

  const copyPath = await repo.findOneBy({ id: parseInt(id) });

  if (!copyPath) {
    res.status(422).json({ error: "Record not found" });
    return;
  }

  copyPath.name = editedData.name;
  copyPath.source = editedData.source;
  copyPath.destination = editedData.destination;
  await repo.save(copyPath);

  res.status(200).json("edited");
});

export default router;
