import { CopyPath } from "./../entity/copyPath";
import { CopyPathDto } from "./copyPathDto";
import { Router } from "express";
import { AppDataSource } from "../data-source";
const router = Router();

const repo = AppDataSource.getRepository(CopyPath);

router.put("/edit/:id", async (req, res) => {
    try {
        const id: string = req.params.id;
        const editedData: CopyPathDto = req.body;
        const reqId: string = JSON.stringify(req.body.id);

        if (id !== reqId) {
            res.status(422).json({ error: "Request and Body Id not match" });
            return;
        }

        if (!editedData) {
            res.status(422).json({ error: "No data provided" });
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
        copyPath.includeFiles = JSON.stringify(editedData.includeFilesOnly);
        copyPath.excludedDirectories = JSON.stringify(
            editedData.excludeDirectories
        );
        copyPath.excludedFiles = JSON.stringify(editedData.excludeFiles);
        await repo.save(copyPath);

        res.status(200).json("edited");
    } catch (error) {
        res.status(400).json();
    }
});

export default router;
