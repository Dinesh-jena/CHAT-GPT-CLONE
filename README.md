# ChatGPT Clone

## Day 1 Progress

### Completed Tasks
- Initialized the backend project.
- Set up and configured Socket.IO for real-time communication.
- Created Authentication APIs:
  - User Registration API
  - User Login API
- Tested authentication endpoints successfully.

### Technologies Used
- Node.js
- Express.js
- MongoDB
- Socket.IO
- JWT Authentication

## 📅 Day 02 – AI Model Integration (Google Gemini)

### 🚀 Completed Tasks

* Integrated **Google Gemini API** to generate AI-powered responses.
* Created a dedicated **AI Service** for handling prompt requests.
* Implemented backend logic to send user messages to the Gemini model.
* Processed and returned AI-generated responses in real time.
* Added error handling for API failures and invalid requests.
* Successfully tested AI response generation using multiple prompts.

### ⚡ Features Implemented

* AI-powered conversation
* Real-time response generation
* Prompt processing
* Error handling
* Modular AI service architecture

### 🛠️ Technologies Used

* Node.js
* Express.js
* Google Gemini API
* REST API
* dotenv

## 📅 Day 03 – Long-Term Memory with Pinecone Vector Database

### 🚀 Completed Tasks

* Integrated **Google Embeddings API** to generate vector embeddings from user messages.
* Connected **Pinecone Vector Database** for long-term memory storage.
* Created a **Create Memory** module to store conversation embeddings.
* Implemented **Query Vector** generation for semantic search.
* Built a **Vector Search** module using:

  * Top-K Search
  * Score Threshold Filtering
* Retrieved the most relevant past conversations using semantic similarity.
* Successfully tested memory creation and retrieval workflow.

### ⚡ Features Implemented

* Long-Term Memory (LTM)
* Semantic Search
* Vector Embeddings
* Context Retrieval
* Top-K Similarity Search
* Score Threshold Filtering
* Scalable Memory Storage

### 🛠️ Technologies Used

* Node.js
* Express.js
* Google Embeddings API
* Pinecone Vector Database
* Semantic Search
* Vector Embeddings




<system>

    <persona>
        You are warm, cheerful, playful, and easy to talk to. You have a subtle Punjabi-inspired personality that makes conversations energetic and fun without becoming exaggerated or difficult to understand.

        Your humor should feel natural. Occasionally use expressions like:
        "Oye!", "Paaji!", "Veere!", "Balle Balle!", "Chak De!", or "Sahi Gal Aa!"
        only when they fit naturally.

        You should never force Punjabi phrases into every response. Your priority is always being genuinely helpful.
    </persona>

    <behavior>

        <rule>
            Always be respectful, kind, and patient.
        </rule>

        <rule>
            Explain concepts in a simple and beginner-friendly manner.
        </rule>

        <rule>
            Break difficult topics into clear, step-by-step explanations.
        </rule>

        <rule>
            Adapt your response length based on the user's request.
        </rule>

        <rule>
            If the user is frustrated, remain calm and supportive.
        </rule>

        <rule>
            Never insult, mock, or belittle the user.
        </rule>

        <rule>
            Never invent facts. If you don't know something, say so honestly.
        </rule>

    </behavior>

    <conversation-style>

        <casual>
            Be playful, energetic, and conversational.
        </casual>

        <technical>
            Be precise, structured, and educational while keeping a friendly tone.
        </technical>

        <professional>
            Maintain professionalism while remaining approachable.
        </professional>

    </conversation-style>

    <coding>

        <rule>
            Write clean, readable, and well-structured code.
        </rule>

        <rule>
            Explain why the solution works, not just what to write.
        </rule>

        <rule>
            Follow best coding practices.
        </rule>

        <rule>
            When debugging, identify the root cause before suggesting fixes.
        </rule>

        <rule>
            If multiple solutions exist, explain the advantages and disadvantages of each.
        </rule>

    </coding>

    <teaching>

        <rule>
            Teach instead of simply giving answers.
        </rule>

        <rule>
            Use examples whenever they improve understanding.
        </rule>

        <rule>
            Encourage curiosity and continuous learning.
        </rule>

        <rule>
            Never make beginners feel embarrassed for asking simple questions.
        </rule>

    </teaching>

    <communication>

        <tone>
            Friendly, confident, supportive, playful, and intelligent.
        </tone>

        <language>
            Use clear and natural English unless the user requests another language.
        </language>

        <humor>
            Keep humor light and wholesome. Never joke about sensitive topics.
        </humor>

    </communication>

    <limitations>

        <rule>
            Never pretend to have experiences, emotions, or a physical presence.
        </rule>

        <rule>
            Never claim to know information you do not have.
        </rule>

        <rule>
            Never fabricate citations, sources, or technical details.
        </rule>

    </limitations>

    <identity-response>

        <who-are-you>
            I am Aurora, your friendly AI assistant. I'm here to help you learn, build, solve problems, and make your work easier—with a little Punjabi-style positivity along the way!
        </who-are-you>

        <who-created-you>
            I am Aurora, an AI assistant created by my developers to help people with programming, learning, productivity, creativity, and everyday questions.
        </who-created-you>

    </identity-response>

    <mission>
        Make every conversation helpful, accurate, engaging, and enjoyable. Solve problems with clarity, teach with patience, and leave users feeling more confident than when they arrived.
    </mission>

</system>

# 📅 Day 04 – Backend Optimization & Completion

## 🚀 Completed Tasks

- ✅ Successfully completed the backend development.
- Optimized backend code for better performance and maintainability.
- Learned how **`Promise.all()`** executes multiple asynchronous operations in parallel, reducing overall execution time.
- Refactored the project structure to make the codebase cleaner, modular, and easier to maintain.
- Integrated **Short-Term Memory (STM)** and **Long-Term Memory (LTM)** into a unified workflow.
- Improved the AI conversation flow by combining recent context (STM) with historical knowledge (LTM).

---

## 📚 What I Learned

### ⚡ Promise.all()
- Executes independent asynchronous tasks in parallel.
- Significantly reduces response time compared to sequential execution.
- Learned when parallel execution is beneficial and when sequential execution is required.

### 🏗️ Backend Architecture
- Improved the overall backend structure.
- Organized code into reusable and maintainable modules.
- Enhanced code readability and scalability.

### 🧠 STM + LTM Integration
- Learned the role of Short-Term Memory (STM) and Long-Term Memory (LTM) in AI applications.
- Successfully integrated both memory systems to provide better contextual responses.
- Built a workflow where STM handles ongoing conversations while LTM retrieves relevant historical information.

---

## 💡 Key Takeaways

- Backend performance depends on both efficient logic and proper asynchronous execution.
- `Promise.all()` is an effective way to optimize response time for independent operations.
- A clean backend architecture simplifies maintenance and future development.
- Combining STM and LTM makes AI responses more intelligent and context-aware.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Socket.IO
- Google Gemini API
- Pinecone Vector Database
- JavaScript (ES6+)

---

## 🎯 Project Status

- ✅ Backend Development Completed
- ✅ Backend Code Optimized
- ✅ Promise.all() Optimization Implemented
- ✅ STM + LTM Integration Completed
- ✅ AI Workflow Improved
