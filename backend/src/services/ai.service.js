const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function generateResponse(content){
         
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: content
        });

        return response.text;
    } catch (error) {
        console.error("Gemini Error:", error.message);
        return "Gemini quota exceeded.";
    }
   

}

module.exports = {
    generateResponse
}