// This code is for v4 of the openai package: npmjs.com/package/openai
const { OpenAI } = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function textToJson(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "convert the following text to json format and return the result",
        },
        {
          role: "user",
          content: `{prompt:${prompt},format:json}`,
        },
      ],
      temperature: 0,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(response.choices[0].message.content);
    const result = JSON.parse(response.choices[0].message.content);
    return result;
  } catch (err) {
    console.log("openai api error", err);
    return err;
  }
}


module.exports = textToJson;
