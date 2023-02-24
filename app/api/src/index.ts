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
