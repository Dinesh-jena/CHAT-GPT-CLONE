// Import the Pinecone library
const { Pinecone } = require('@pinecone-database/pinecone');

// Initialize a Pinecone client with your API key
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

// Create an index for dense vectors with integrated embedding
// const ChatGptCloneIndex = pc.Index('chat-gpt-clone');
const ChatGptCloneIndex = pc.Index(
    process.env.PINECONE_INDEX_NAME,
    process.env.PINECONE_HOST
);
console.log(ChatGptCloneIndex);


async function createMemory({vectors,metadata,messageId}){

        console.log("Vectors:", vectors);
//     await ChatGptCloneIndex.upsert({
//   vectors: [
//     {
//       id: messageId.toString(),
//       values: vectors,
//       metadata,
//     },
//   ],
// });


console.log("Vector Length:", vectors.length);

    const record = {
        id: String(messageId),
        values: vectors,
        metadata
    };
    
    await ChatGptCloneIndex.upsert([record]);
}



async function queryMemory({queryVector, limit = 5,metadata}) {
    
    const data = await ChatGptCloneIndex.query({
         vector:queryVector,
         topK: limit,
         filter: metadata || undefined,
         includeMetadata: true
    })

    return data.matches
   
}


module.exports = {createMemory,queryMemory};