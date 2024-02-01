import { CopyPathDto } from "./copyPathDto";
import { Router } from "express";
import { AppDataSource } from "../data-source";
import { CopyPath } from "../entity/copyPath.entity";
const router = Router();

router.get("/list", async (req, res) => {
    try {
        const data = await AppDataSource.manager.find(CopyPath);
        if (!data) {
            res.status(500).json({ error: "Failed to read file" });
            return;
        }

        const copyPathsDto: CopyPathDto[] = data.map(({ id, name, source, destination, includeFiles, excludedDirectories, excludedFiles, activeDaysOfWeek, showProgressInLogs, disable }: CopyPath) => ({
            id,
            name,
            source,
            destination,
            showProgressInLogs,
            disable,
            includeFilesOnly: JSON.parse(includeFiles),
            excludeDirectories: JSON.parse(excludedDirectories),
            excludeFiles: JSON.parse(excludedFiles),
            activeDaysOfWeek: JSON.parse(activeDaysOfWeek ?? '[]'),
        }));

        res.json(copyPathsDto);
    } catch (error) {
        res.status(400).json();
    }
});

export default router;
