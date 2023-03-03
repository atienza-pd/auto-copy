import { AppDataSource } from "./data-source";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import listCopyEntryRoutes from "./copy-path/listCopyPathRoutes";
import addCopyPathRoutes from "./copy-path/addCopyPathRoutes";
import editCopyPathRoutes from "./copy-path/editCopyPathRoutes";
import removeCopyPathRoutes from "./copy-path/removeCopyPathRoutes";
import getOneCopyPathRoute from "./copy-path/getOneCopyPathRoute";
import buildCopyPathJsonRoute from "./copy-path/buildCopyPathJsonRoute";
import editBuildJsonLocationRoutes from "./copy-path/editBuildJsonLocationRoutes";
import getOneBuildCopyPathJsonRoute from "./copy-path/getOneBuildCopyPathJsonRoute";

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
    exposedHeaders: ["Content-Length"],
    allowedHeaders: ["Accept", "Content-Type", "Origin", "X-Requested-With"],
};
AppDataSource.initialize()
    .then(async () => {
        console.log("Database has been started!");
    })
    .catch((error) => console.log(error));
const app = express();
const port = 3000;
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/copy-path", [
    listCopyEntryRoutes,
    addCopyPathRoutes,
    editCopyPathRoutes,
    removeCopyPathRoutes,
    getOneCopyPathRoute,
    buildCopyPathJsonRoute,
    editBuildJsonLocationRoutes,
    getOneBuildCopyPathJsonRoute,
]);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
