import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

//import routes

import interestedRoutes from "./routes/interested.routes.js";
import eventRoutes from "./routes/events.routes.js";
import usersRoutes from "./routes/users.routes.js";
import questionAnswersRoutes from "./routes/questionAnswers.routes.js";
import marksRoutes from "./routes/marks.routes.js";


dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Aqua Org Backend" });
});

// routes

app.use("/aqua-org/events", eventRoutes);
app.use("/aqua-org/interested", interestedRoutes);
app.use("/aqua-org/users", usersRoutes);
app.use("/aqua-org/marks", marksRoutes);
app.use("/aqua-org/question-answers", questionAnswersRoutes);


const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pksoehr.mongodb.net/?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server Running on port :http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.log(error.message);
  });
