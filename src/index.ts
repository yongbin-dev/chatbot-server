import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAIRouter from "./routes/OpenAIRouter";
import morgan from "morgan";
import logStream from "./util/morganLogging";

const app = express();

if (process.env.NODE_ENV === "product") {
  app.use(
    morgan(
      "[:remote-addr - :remote-user] [:date[web]] :method :url HTTP/:http-version :status :response-time ms",
      { stream: logStream }
    )
  );
} else {
  app.use(morgan("dev"));
}

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/openai", OpenAIRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
