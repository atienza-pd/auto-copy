import { CopyPath } from './entity/copyPath';
import { AppDataSource } from "./data-source";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import listCopyEntryRoutes from "./copy-path/listCopyPathRoutes";
import addCopyPathRoutes from "./copy-path/addCopyPathRoutes";
import editCopyPathRoutes from "./copy-path/editCopyPathRoutes";
import removeCopyPathRoutes from "./copy-path/removeCopyPathRoutes";

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  exposedHeaders: ["Content-Length"],
  allowedHeaders: ["Accept", "Content-Type", "Origin", "X-Requested-With"],
};
AppDataSource.initialize()
  .then(async () => {
    const copyPath = new CopyPath();
    copyPath.name = "Timber";
    copyPath.source = "Saw";
    copyPath.destination = "test";
    await AppDataSource.manager.save(copyPath);
    console.log("Saved a new user with id: " + copyPath.id);

    console.log("Loading copypaths from the database...");
    const users = await AppDataSource.manager.find(CopyPath);
    console.log("Loaded copyPaths: ", users);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
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
]);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
