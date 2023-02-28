import { CopyPath } from "./../entity/copyPath";
import { AppDataSource } from "./../data-source";
import { CopyPathDto } from "./copyPathDto";
import { Router } from "express";
const router = Router();

const repo = AppDataSource.getRepository(CopyPath);

router.delete("/remove/:id", async (req, res) => {
  const id: number = parseInt(req.params.id);

  const copyPath = await repo.findOneBy({ id: id });

  if (!copyPath) {
    res.status(422).json({ error: "Record not found" });
    return;
  }

  await repo.remove(copyPath);

  res.json("deleted");
});

export default router;
