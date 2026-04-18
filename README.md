🚀 Intervio – AI Mock Interview Platform

Intervio is a full-stack AI-powered mock interview platform that helps users practice interviews with real-time feedback, performance analytics, and personalized question generation.


🌟 Features

* 🤖 AI Interview Generation – Dynamic questions based on role, experience, and resume
* 🎤 Speech-to-Text Support – Real-time answer capture using Web Speech API
* 📊 Performance Analytics Dashboard – Track scores and progress over time
* 🔐 Authentication System – Google OAuth (Firebase) + JWT-based backend auth
* 💳 Credit-Based System – Integrated payment flow using Razorpay
* 📁 Resume Analysis – Extract structured data using AI
* 📈 Interactive Charts – Visualize performance trends using Recharts

⸻

🧠 Tech Stack

Frontend

* React.js
* Tailwind CSS
* Recharts
* Axios

Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication

Integrations

* Firebase (Google Auth)
* Razorpay (Payments)
* OpenRouter API (LLM Integration)
* PDF.js (Resume Parsing)

  ________

Architecture

Frontend (React)
      ↓
Backend (Node/Express)
      ↓
MongoDB + External APIs

__________

* Firebase handles authentication
* JWT manages backend session & authorization
* REST APIs handle business logic
* AI services generate and evaluate interviews

__________

📊 Dashboard Features

* 👤 User Profile & Credits
* 📈 Performance Trend Graph (Left → Right progression)
* 🧾 Interview History
* 📊 Average Score & Analytics

_______


⚙️ Setup Instructions

1. Clone the Repository
git clone https://github.com/your-username/intervio.git
cd intervio

2. Backend Setup
cd server
npm install

Create .env
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
OPENROUTER_API_KEY=your_api_key

run backend
npm run dev

3. Frontend Setup
cd client
npm install

Create .env:
VITE_SERVER_URL=http://localhost:8000

Run frontend
npm run dev

