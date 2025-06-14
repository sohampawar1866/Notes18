# 📝 Notes18

> A beautiful, secure personal diary application built with modern web technologies

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

## 🌟 Live Demo

**[🚀 Try Notes18 Live](https://notes18.vercel.app)**

*Default Security Answer: "Fight Back"*

---

## 📖 About

Notes18 is a modern, secure diary application that provides a beautiful interface for capturing your thoughts, memories, and daily experiences. Built with privacy and user experience in mind, it features a clean design with smooth animations and robust security.

### ✨ Key Features

- 🎨 **Beautiful UI/UX** - Clean, futuristic design with smooth Framer Motion animations
- 🔒 **Secure Authentication** - Custom security question protection (no passwords to remember!)
- 📱 **Fully Responsive** - Perfect experience on desktop, tablet, and mobile
- 💾 **Cloud Storage** - Your entries are safely stored in MongoDB Atlas
- ⚡ **Lightning Fast** - Built with Next.js 14 for optimal performance
- 🎭 **Smooth Animations** - Delightful interactions powered by Framer Motion
- 🌙 **Modern Design** - Gradient backgrounds and glass-morphism effects

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | Next.js 14, TypeScript, Tailwind CSS |
| **Backend** | Next.js API Routes |
| **Database** | MongoDB Atlas |
| **Animations** | Framer Motion |
| **UI Components** | Radix UI + Custom Components |
| **Deployment** | Vercel |
| **Styling** | Tailwind CSS + CSS Variables |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (free tier available)
- Git installed

### 1. Clone & Install

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/Notes18.git
cd Notes18

# Install dependencies
npm install
\`\`\`

### 2. Set Up Database

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create a database user with read/write permissions
4. Get your connection string from the "Connect" button

### 3. Configure Environment

\`\`\`bash
# Copy environment template
cp .env.example .env.local
\`\`\`

Edit `.env.local`:
\`\`\`env
# Your MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/notes18?retryWrites=true&w=majority

# Optional: Customize security answer
SECURITY_ANSWER=Your Custom Answer
\`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) and start writing! 📝

---

## 📁 Project Structure

\`\`\`
Notes18/
├── 📁 app/
│   ├── 📁 api/              # API routes
│   │   ├── 📁 entries/      # CRUD operations for diary entries
│   │   └── 📁 login/        # Authentication endpoint
│   ├── 📄 globals.css       # Global styles & CSS variables
│   ├── 📄 layout.tsx        # Root layout component
│   └── 📄 page.tsx          # Main application page
├── 📁 components/
│   ├── 📁 ui/               # Reusable UI components (shadcn/ui)
│   ├── 📄 AuthScreen.tsx    # Security question login
│   ├── 📄 DiaryCard.tsx     # Entry display cards
│   ├── 📄 DiaryEditor.tsx   # Create/edit entry modal
│   └── 📄 DiaryInterface.tsx # Main diary dashboard
├── 📁 lib/
│   ├── 📁 models/           # MongoDB schemas
│   ├── 📄 mongodb.ts        # Database connection utility
│   └── 📄 utils.ts          # Helper functions
├── 📁 hooks/                # Custom React hooks
├── 📁 types/                # TypeScript type definitions
└── 📄 README.md             # You are here! 👋
\`\`\`

---

## 🎨 Screenshots

### 🔐 Authentication Screen
<img src="https://via.placeholder.com/800x500/4F46E5/FFFFFF?text=Beautiful+Login+Screen" alt="Auth Screen" width="100%">

*Secure login with custom security question*

### 📝 Diary Interface
<img src="https://via.placeholder.com/800x500/06B6D4/FFFFFF?text=Clean+Card+Layout" alt="Diary Interface" width="100%">

*Clean, card-based layout with smooth animations*

### ✏️ Entry Editor
<img src="https://via.placeholder.com/800x500/10B981/FFFFFF?text=Full+Screen+Editor" alt="Entry Editor" width="100%">

*Distraction-free writing experience*

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/Notes18)

1. **Fork this repository**
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your forked repository
3. **Add Environment Variables**:
   \`\`\`
   MONGODB_URI = your_mongodb_connection_string
   SECURITY_ANSWER = your_custom_answer
   \`\`\`
4. **Deploy!** 🎉

### Alternative Deployment Options

- **Netlify**: Full Next.js support
- **Railway**: Easy MongoDB integration
- **DigitalOcean App Platform**: Scalable hosting
- **Heroku**: Classic PaaS option

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `MONGODB_URI` | MongoDB Atlas connection string | ✅ Yes | - |
| `SECURITY_ANSWER` | Custom security question answer | ❌ No | "Fight Back" |

### Security Features

- 🔐 **No Traditional Passwords** - Uses memorable security questions
- 🛡️ **Environment Protection** - Sensitive data in environment variables
- 🚫 **No Data Exposure** - Clean, secure codebase
- 🔒 **Encrypted Connections** - MongoDB Atlas with TLS/SSL

### Customization Options

#### Change Security Question
Edit `components/AuthScreen.tsx`:
\`\`\`tsx
<p className="text-slate-600 bg-slate-50 p-3 rounded-lg border">
  Your custom security question here?
</p>
\`\`\`

#### Modify Theme Colors
Edit `app/globals.css` CSS variables:
\`\`\`css
:root {
  --primary: 220 100% 50%;    /* Blue theme */
  --secondary: 270 100% 50%;  /* Purple accent */
}
\`\`\`

---

## 🤝 Contributing

We love contributions! Here's how you can help make Notes18 even better:

### 🐛 Found a Bug?
[Open an issue](https://github.com/yourusername/Notes18/issues/new?template=bug_report.md) with details

### 💡 Have an Idea?
[Suggest a feature](https://github.com/yourusername/Notes18/issues/new?template=feature_request.md)

### 🔧 Want to Code?

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit**: `git commit -m 'Add amazing feature'`
5. **Push**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/Notes18?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/Notes18?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/Notes18)
![GitHub license](https://img.shields.io/github/license/yourusername/Notes18)

---

## 🙏 Acknowledgments

Special thanks to these amazing projects that made Notes18 possible:

- **[Next.js](https://nextjs.org/)** - The React framework for production
- **[MongoDB](https://www.mongodb.com/)** - Modern database for modern apps
- **[Framer Motion](https://www.framer.com/motion/)** - Beautiful animations made simple
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Vercel](https://vercel.com/)** - Platform for frontend developers

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/Notes18/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/Notes18/discussions)
- 📧 **Email**: your.email@example.com
- 🐦 **Twitter**: [@yourusername](https://twitter.com/yourusername)

---

<div align="center">

**[⭐ Star this repo](https://github.com/yourusername/Notes18)** if you found it helpful!

Made with ❤️ for secure, beautiful note-taking

**[🚀 Try Notes18 Live](https://notes18.vercel.app)**

</div>
