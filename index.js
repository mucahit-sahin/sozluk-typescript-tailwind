import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";
import agendaRouter from "./routes/agenda.js";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/agenda", agendaRouter);

const PORT = process.env.PORT || 5000;

// This command will import the client build folder to the server.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.resolve(__dirname, "./client/build")));

/* This command will redirect all request to index.html in build directory.*/

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server Running `)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set("useFindAndModify", false);
