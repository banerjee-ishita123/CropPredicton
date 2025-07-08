import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"

const apiKey = 'AIzaSyAb9Ixx4c7Dc_5lwV3blsUUv1wMx4iKya0';
const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
})

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
}

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  })

  const result = await chatSession.sendMessage([{ text: prompt }]) // ✅ FIXED
  const response = result.response.text()
  console.log(response)

  return response
}

export default run
