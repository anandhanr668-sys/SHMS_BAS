# 🏥 HMS + LCNC Backend Platform

A **multi-tenant Hospital Management System** with a built-in  
**Low-Code / No-Code backend platform**.

---

## 🚀 Features

- Multi-hospital (tenant-based) architecture
- Role-based access control (RBAC)
- OPD / IPD / Visits / Billing / Pharmacy / Insurance
- Low-Code Engines:
  - Form Engine
  - Rules Engine
  - Workflow Engine
  - Report Engine
- Real-time updates (Socket.IO)
- Audit & compliance logs
- Analytics dashboard
- Docker-ready deployment

---

## 🧱 Architecture Overview

```
Client (Web / Mobile)
↓
API Gateway (Express)
↓
Tenant + Auth + RBAC
↓
Business Modules
↓
LCNC Engines
↓
Database + Real-time + Analytics
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone repository
```bash
git clone https://github.com/yourname/hms-lcnc-backend.git
cd hms-lcnc-backend
```

### 2️⃣ Environment setup
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3️⃣ Run with Docker
```bash
docker-compose up --build
```

### 4️⃣ Run locally
```bash
npm install
npm run dev
```

---

## 🔐 Default APIs

- `POST /api/auth/login` - User authentication
- `GET /api/patients` - Get all patients
- `POST /api/visits` - Create visit
- `POST /api/lcnc/forms` - Create dynamic form
- `POST /api/lcnc/workflows` - Create workflow

---

## 🎓 Academic / Interview Value

✔ Final-year project ready  
✔ Startup-grade architecture  
✔ Demonstrates SaaS, LCNC, real-time systems  

---

## 📜 License

MIT
