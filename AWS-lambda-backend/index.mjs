import { Configuration, OpenAIApi } from "openai";
import { v4 as uuid } from "uuid";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function handler(event) {
  try {
    const { prompt } = JSON.parse(event.body);
    if (!prompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: { message: "No prompt provided" } }),
      };
    }
    const autoCompleteResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.2,
      max_tokens: 1000,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const topChoice = autoCompleteResponse.data.choices[0];
    const autoCompleteId = uuid();
    return {
      statusCode: 200,
      body: JSON.stringify({
        id: autoCompleteId,
        autoComplete: topChoice.text,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: { message: error.message } }),
    };
  }
}