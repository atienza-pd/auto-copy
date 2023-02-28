import { CopyPathDto } from "./copyPathDto";
import { Router } from "express";
import { AppDataSource } from "../data-source";
import { CopyPath } from "../entity/copyPath";
import * as fs from "fs";
const router = Router();

const updateFile = (data, callback) => {
    fs.writeFile("./src/test.json", JSON.stringify(data), (err) => {
        if (err) {
            callback({ error: "Failed to update file" }, null);
        } else {
            callback(null, data);
        }
    });
};

router.post("/build", async (req, res) => {
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
        excludeFiles: JSON.parse(x.excludedFiles)
    }));

    updateFile(copyPathsDto, (err, updatedStore) => {
        if (err) {
            res.status(500).json(err);
            return;
        }
        res.json("json created");
    });

    
});

export default router;
