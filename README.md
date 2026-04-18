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

____________

🌐 Deployment

* Frontend: Vercel
* Backend: Render

Important Notes:

* Use /api proxy in production
* Configure CORS properly
* Set cookies with:
    * httpOnly: true
    * secure: true
    * sameSite: "None"

⸻

🔐 Authentication Flow

1. User logs in via Google (Firebase)
2. Backend verifies/creates user
3. JWT token is generated and stored in cookies
4. All protected routes use middleware (req.userId)

⸻

📌 Key Learnings

* Handling CORS & cookies in production
* Managing frontend-backend communication
* Debugging deployment vs local issues
* Implementing secure authentication systems
* Designing scalable REST APIs
* Integrating AI into real-world applications

⸻

🚀 Future Improvements

* 🧠 AI-based strengths & weaknesses analysis
* 📊 Multi-metric charts (confidence, communication, correctness)
* 💳 Detailed payment history
* 📱 Mobile responsiveness improvements
* ⚡ WebSocket-based real-time interview

⸻

👨‍💻 Author

Nitesh

* GitHub: https://github.com/Nitesh7343
* LinkedIn: https://www.linkedin.com/in/nitesh7343/
