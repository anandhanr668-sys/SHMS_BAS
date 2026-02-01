# 🏥 Smart Hospital Management System (HMS)

A modern, enterprise-grade **Hospital Management System frontend** built with  
**React + Vite**, featuring **Low-Code / No-Code engines**, real-time updates, and
role-based dashboards.

---

## 🚀 Tech Stack

- ⚛️ React 18
- ⚡ Vite
- 🧭 React Router
- 🧠 Zustand (Global State)
- 🎨 Modular CSS (No UI framework)
- 🔌 Mock Realtime (WebSocket-like)
- 🧩 Low-Code / No-Code Engines

---

## 🏗 Architecture Overview

```
src/
├── core/                    # AppShell, guards, providers
├── components/              # Reusable UI components
├── lcnc/                    # Form, Rules, Report, Workflow engines
├── dashboards/              # Role-based screens (Admin, Nurse, Doctor, Patient)
├── realtime/                # Live updates & notifications
├── services/                # API abstraction layer
├── store/                   # Global state (Zustand)
├── utils/                   # Validators, permissions, helpers
├── routes/                  # Central routing
├── styles/                  # Feature-based styling
├── App.jsx
├── main.jsx
└── index.css
```

---

## 👥 Supported Roles

- 👨‍💼 Admin
- 🧾 Front Desk
- 🩺 Nurse
- 👨‍⚕️ Doctor
- 🧑‍⚕️ Patient

Each role has **dedicated dashboards and workflows**.

---

## 🧠 Key Features

- 🔧 Low-Code Form Builder & Runtime Renderer
- 🧠 Visual Rules Engine with Simulator
- 📊 Report Designer & Live Preview
- 🔄 Workflow / State Machine Engine
- 🔔 Real-time Bed & Notification Updates
- 🧩 Role & Permission based access
- 🏥 Multi-tenant (multi-hospital ready)

---

## ▶️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Open in browser
```
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
npm run preview
```

---

## 🎯 Project Status

✅ Architecture complete  
✅ All roles implemented  
✅ LCNC engines working  
✅ Realtime simulation ready  
✅ Enterprise-grade frontend  

---

## 📌 Future Enhancements

- Backend integration (Node / Spring / .NET)
- Real WebSocket (Socket.IO)
- PDF / Excel export
- Mobile responsiveness
- Deployment (Vercel / Netlify)

---

## 👤 Author

**Ajay G**  
Smart HMS Frontend Project

Built as a real-world, enterprise-ready hospital platform frontend.

