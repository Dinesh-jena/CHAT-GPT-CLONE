const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function generateResponse(content){
         console.log(content);
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

async function generateVector(content){

    const responce = await ai.models.embedContent({
        model:'gemini-embedding-2',
        contents:content,
        config: {
            outputDimensionality: 768
        }
    })

    return responce.embeddings[0].values
}

module.exports = {
    generateResponse,
    generateVector
}