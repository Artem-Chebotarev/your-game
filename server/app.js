const express = require("express");
const cors = require("cors");
const { dbConnect } = require("../server/src/db/connect");
const TopicModel = require("./src/models/topic.model");
const QuestionModel = require("./src/models/question.model");

const PORT = 3000;

const app = express();

dbConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1/game", async (req, res) => {
  const topics = await TopicModel.find().populate("questions");
  console.log(topics);
  res.json(topics);
});

app.listen(PORT, () => {
  console.log("Server has been started on port ", PORT);
});
