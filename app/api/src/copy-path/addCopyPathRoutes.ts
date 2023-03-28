import { CopyPathDto } from "./copyPathDto";
import { Router } from "express";
import { AppDataSource } from "../data-source";
import { CopyPath } from "../entity/copyPath";
const router = Router();

const repo = AppDataSource.getRepository(CopyPath);


export function testMethod(){
    return "test";
}
router.post("/add", async (req, res) => {
    try {
        const copyPathDto: CopyPathDto = req.body;
        if (!copyPathDto) {
            res.status(422).json({ error: "No data provided" });
        }

        const copyPath = new CopyPath();
        copyPath.name = copyPathDto.name;
        copyPath.source = copyPathDto.source;
        copyPath.destination = copyPathDto.destination;
        copyPath.includeFiles = JSON.stringify(copyPathDto.includeFilesOnly);
        copyPath.excludedDirectories = JSON.stringify(
            copyPathDto.excludeDirectories
        );
        copyPath.excludedFiles = JSON.stringify(copyPathDto.excludeFiles);
        await repo.save(copyPath);
        res.status(201).json("added");
    } catch (error) {
        res.status(400).json();
    }
});

export default router;
