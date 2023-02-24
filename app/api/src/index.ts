import express from "express";
import bodyParser from "body-parser";
import { Todo } from "types";
import listCopyEntryRoutes from "./copy-path/listCopyPathRoutes";
import addCopyPathRoutes from "./copy-path/addCopyPathRoutes";
import editCopyPathRoutes from "./copy-path/editCopyPathRoutes";
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/copy-path", [
  listCopyEntryRoutes,
  addCopyPathRoutes,
  editCopyPathRoutes,
]);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
