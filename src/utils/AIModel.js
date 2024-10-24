// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";

const key = process.env.REACT_APP_GEMINI_KEY;
  
  const apiKey = key;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "\"Act as a movie Recommendation system and suggest some movies for the\nquery : \" +indian  horror movies + \"only give me names of 5 movies comma separated like the example result given ahead. Example Result: Hera Pheri, andaz apna apna, welcome, Golmaal, Garam masala\""},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Raaz,  1920,  Stree,  Bhoot,  Tumbbad \n"},
          ],
        },
      ],
    });
  
  