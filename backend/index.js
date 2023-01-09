const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const app = express();
const { Configuration, OpenAIApi } = require("openai");

require("dotenv").config();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", function (req, res) {
  return res.status(200).json({ message: "Hello from OPENAI chat bot" });
});

app.get("/get-completion", async function getCompletion(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const { prompt } = req.body;

  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.2,
    max_tokens: 1000,
    presence_penalty: 0.1,
    frequency_penalty: 0.1,
  });
  return;
});

var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log(">Express app is running at PORT " + PORT);
});
