import { CopyPathDto } from "./copyPathDto";

import { Router } from "express";
import { AppDataSource } from "../data-source";
import { CopyPath } from "../entity/copyPath.entity";
const router = Router();

const repo = AppDataSource.getRepository(CopyPath);

router.get("/get/:id", async (req, res) => {
    try {
        const _id: string = req.params.id;

        const copyPath = await repo.findOneBy({ id: parseInt(_id) });

        if (!copyPath) {
            res.status(422).json({ error: "Record not found" });
            return;
        }

        const { id, name, source, destination, showProgressInLogs, disable } : CopyPath = copyPath;

        const copyPathDto: CopyPathDto = {
            id,
            name,
            source,
            destination,
            disable,
            showProgressInLogs,
            includeFilesOnly: JSON.parse(copyPath.includeFiles),
            excludeDirectories: JSON.parse(copyPath.excludedDirectories),
            excludeFiles: JSON.parse(copyPath.excludedFiles),
            activeDaysOfWeek: JSON.parse(copyPath.activeDaysOfWeek ?? '[]'),
        };

        res.json(copyPathDto);
    } catch (error) {
        res.status(400).json();
    }
});

export default router;
