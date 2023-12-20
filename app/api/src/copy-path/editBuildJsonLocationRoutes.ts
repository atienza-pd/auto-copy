import { BuildJsonLocation } from "./../entity/buildJsonLocation.entity";
import { BuildJsonLocationDto } from "./buildJsonLocationDto";
import { Router } from "express";
import { AppDataSource } from "../data-source";
const router = Router();

const repo = AppDataSource.getRepository(BuildJsonLocation);

router.put("/build-json-location/edit/:id", async (req, res) => {
    try {
        const id: string = req.params.id;
        const editedData: BuildJsonLocationDto = req.body;
        const reqId: string = JSON.stringify(req.body.id);

        if (id !== reqId) {
            res.status(422).json({ error: "Request and Body Id not match" });
            return;
        }

        if (!editedData) {
            res.status(422).json({ error: "No data provided" });
            return;
        }

        const buildJsonLocation = await repo.findOneBy({ id: parseInt(id) });

        if (!buildJsonLocation) {
            res.status(422).json({ error: "Record not found" });
            return;
        }

        buildJsonLocation.location = editedData.location;
        await repo.save(buildJsonLocation);

        res.status(200).json("edited");
    } catch (error) {
        res.status(400).json();
    }
});

export default router;
