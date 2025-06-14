# 📝 Notes18

A beautiful, secure personal diary app built with **Next.js**, **MongoDB**, and smooth **Framer Motion** animations.

---

## 🔗 Live Demo

👉 https://notes.sohampawar.me

---

## 🧩 Tech Stack

- **Frontend**: Next.js (React), Tailwind CSS, Framer Motion  
- **Backend**: Next.js API routes + MongoDB (via MongoDB Atlas & Mongoose)  
- **Auth**: Custom question-based login flow  
- **Deployment**: Vercel (frontend) and MongoDB Atlas (database)

---

## ✨ Features

- Create, edit, delete diary entries with auto timestamps  
- Secure login via a memorable question  
- Search and filter notes  
- Smooth UI transitions with Framer Motion :contentReference[oaicite:1]{index=1}  
- Fully responsive, mobile-optimized design

---

## 🚀 Quick Setup

```bash
# 1. Clone the repo
git clone https://github.com/sohampawar1866/Notes18.git
cd Notes18

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create a `.env.local` file in the project root:
MONGODB_URI=your_mongodb_connection_string

# 4. Run in development mode
npm run dev

# 5. Open in browser
# Go to http://localhost:3000 and enjoy your diary app!
