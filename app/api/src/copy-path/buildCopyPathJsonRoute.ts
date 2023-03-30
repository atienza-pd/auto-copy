import { CopyPathDto } from "./copyPathDto";
import { Router } from "express";
import { AppDataSource } from "../data-source";
import { CopyPath } from "../entity/copyPath";
import * as fs from "fs";
import { BuildJsonLocation } from "../entity/buildJsonLocation";
import { Not } from "typeorm";
const router = Router();
const repo = AppDataSource.getRepository(BuildJsonLocation);

const updateFile = async (data, callback) => {
    const location = await repo.findOne({ where: { location: Not("") } });
    fs.writeFile(location.location, JSON.stringify(data), (err) => {
        if (err) {
            callback({ error: "Failed to update file" }, null);
        } else {
            callback(null, data);
        }
    });
};

router.post("/build", async (req, res) => {
    try {
        const data = await AppDataSource.manager.find(CopyPath);

        if (!data) {
            res.status(500).json({ error: "Failed to read database data" });
            return;
        }

        const copyPathsDto: CopyPathDto[] = data.flatMap((x: CopyPath) => ({
            id: x.id,
            name: x.name,
            source: x.source,
            destination: x.destination,
            includeFilesOnly: JSON.parse(x.includeFiles),
            excludeDirectories: JSON.parse(x.excludedDirectories),
            excludeFiles: JSON.parse(x.excludedFiles),
            activeDaysOfWeek : JSON.parse(x.activeDaysOfWeek)
        }));

        await updateFile(copyPathsDto, (err, updatedStore) => {
            if (err) {
                console.log(updatedStore);
                res.status(500).json(err);
                return;
            }
            res.json("json created");
        });
    } catch (error) {
        res.status(400).json();
    }
});

export default router;
