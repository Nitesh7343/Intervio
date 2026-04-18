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
