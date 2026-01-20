
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are Lumina, a brilliant and encouraging AI Tutor. 
Your goal is to help students learn by explaining complex concepts simply, 
asking guiding questions rather than just giving answers, and being highly supportive. 
Keep your responses relatively concise (under 150 words) to fit in a chat window. 
Use markdown for formatting.`;

export async function getTutorResponse(prompt: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! I hit a snag. Let's try that again.";
  }
}
