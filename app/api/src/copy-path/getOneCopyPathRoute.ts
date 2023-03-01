import { CopyPathDto } from "./copyPathDto";

import { Router } from "express";
import { AppDataSource } from "../data-source";
import { CopyPath } from "../entity/copyPath";
const router = Router();

const repo = AppDataSource.getRepository(CopyPath);

router.get("/get/:id", async (req, res) => {
    try {
        const id: string = req.params.id;

        const copyPath = await repo.findOneBy({ id: parseInt(id) });

        if (!copyPath) {
            res.status(422).json({ error: "Record not found" });
            return;
        }

        const copyPathDto: CopyPathDto = {
            id: copyPath.id,
            name: copyPath.name,
            source: copyPath.source,
            destination: copyPath.destination,
            includeFilesOnly: JSON.parse(copyPath.includeFiles),
            excludeDirectories: JSON.parse(copyPath.excludedDirectories),
            excludeFiles: JSON.parse(copyPath.excludedFiles)
        }

        res.json(copyPathDto);
    } catch (error) {
        res.status(400).json();
    }

});

export default router;
