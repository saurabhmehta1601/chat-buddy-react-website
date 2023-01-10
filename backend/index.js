const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { Configuration, OpenAIApi } = require("openai");
const uuid = require("uuid");

require("dotenv").config();

app.use(
  cors({
    origin: "https://openai-codex-chat-ca8aymfww-saurabhmehta1601.vercel.app/",
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/", function (req, res) {
  return res.status(200).json({ message: "Hello from OPENAI chat bot" });
});

app.post("/get-completion", async function getCompletion(req, res) {
  try {
    const { prompt } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.2,
      max_tokens: 1000,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const topChoice = response.data.choices[0];
    const autoCompleteId = uuid.v4();
    return res
      .status(200)
      .json({ id: autoCompleteId, autoComplete: topChoice.text });
  } catch (error) {
    console.table(error);
    return res.status(500).json({ error: { message: error.message } });
  }
});

var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log("> Express app is running at PORT " + PORT);
});
