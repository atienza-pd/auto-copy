import { CopyPath } from "./../entity/copyPath.entity";
import { CopyPathDto } from "./copyPathDto";
import { Router } from "express";
import { AppDataSource } from "../data-source";
const router = Router();

const repo = AppDataSource.getRepository(CopyPath);

router.put("/edit/:id", async (req, res) => {
  try {
    const id: number = parseInt(req.params.id);
    const editedData: CopyPathDto = req.body;
    const reqId: number = parseInt(req.body.id);

    if (id !== reqId) {
      res.status(422).json({ error: "Request and Body Id not match" });
      return;
    }

    if (!editedData) {
      res.status(422).json({ error: "No data provided" });
      return;
    }

    const copyPath = await repo.findOneBy({ id: id });

    if (!copyPath) {
      res.status(422).json({ error: "Record not found" });
      return;
    }

    const freshCopyPath: CopyPath = {
      ...copyPath,
      ...editedData,
      id: id,
      includeFiles: JSON.stringify(editedData.includeFilesOnly),
      excludedDirectories: JSON.stringify(editedData.excludeDirectories),
      excludedFiles: JSON.stringify(editedData.excludeFiles),
      activeDaysOfWeek: JSON.stringify(editedData.activeDaysOfWeek),
    };

    await repo.save(freshCopyPath);
    res.status(200).json("edited");
  } catch (error) {
    console.log(error);
    res.status(400).json();
  }
});

export default router;
