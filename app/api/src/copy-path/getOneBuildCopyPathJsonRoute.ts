import { Router } from "express";
import { AppDataSource } from "../data-source";
import { BuildJsonLocation } from "../entity/buildJsonLocation.entity";
import { BuildJsonLocationDto } from "./buildJsonLocationDto";
import { Not } from "typeorm";
const router = Router();

const repo = AppDataSource.getRepository(BuildJsonLocation);

router.get("/build-json-location/first", async (req, res) => {
    try {
        const buildJsonLocation = await repo.findOne({
            where: { location: Not("") },
        });

        if (!buildJsonLocation) {
            res.status(422).json({ error: "Record not found" });
            return;
        }

        const copyPathDto: BuildJsonLocationDto = {
            id: buildJsonLocation.id,
            location: buildJsonLocation.location,
        };

        res.json(copyPathDto);
    } catch (error) {
        res.status(400).json();
    }
});

export default router;
