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

        const copyPathsDto: CopyPathDto[] = data.map((x: CopyPath) => ({
            id: x.id,
            name: x.name,
            source: x.source,
            destination: x.destination,
            includeFilesOnly: JSON.parse(x.includeFiles),
            excludeDirectories: JSON.parse(x.excludedDirectories),
            excludeFiles: JSON.parse(x.excludedFiles),
            activeDaysOfWeek: JSON.parse(x.activeDaysOfWeek ?? '[]')
        }));

        res.json(copyPathsDto);
    } catch (error) {
        res.status(400).json();
    }
});

export default router;
