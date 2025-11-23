import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Ты опытный сомелье и технолог домашнего виноделия. Ты специализируешься на сорте винограда "Изабелла".
Твоя задача - помогать новичкам делать вино дома.
Отвечай кратко, по делу, но с теплотой и поддержкой.
Если пользователь спрашивает о проблемах (плесень, перчатка не надулась, уксусный запах), давай четкие инструкции по спасению вина.
Используй форматирование Markdown для списков и выделения важного.
В контексте: у пользователя есть 20-литровые бутыли, виноград Изабелла, и он новичок.
`;

export const streamGeminiResponse = async (
  history: { role: string; parts: { text: string }[] }[],
  message: string,
  onChunk: (text: string) => void
) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Create a chat session
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts,
      })),
    });

    const result = await chat.sendMessageStream({ message });

    for await (const chunk of result) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
