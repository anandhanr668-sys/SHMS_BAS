# HMS Backend – Low-Code Hospital Platform

## 🚀 Features
- Modular HMS backend
- LCNC Form & Rules Engine
- Bed allocation automation
- Audit & Analytics
- Real-time sockets

## 🛠️ Tech Stack
- Node.js + Express
- PostgreSQL
- Socket.IO
- Docker

## 📁 Project Structure

```
hms-backend/
├── src/
│   ├── app.js                          # Express app bootstrap
│   ├── server.js                       # Server entry point
│   ├── routes.js                       # Route registry
│   ├── socket.js                       # Real-time events
│   ├── config/                         # Configuration
│   ├── middlewares/                    # Global middleware
│   ├── utils/                          # Helpers
│   └── modules/                        # Core business modules
│       ├── auth/                       # Authentication & RBAC
│       ├── users/                      # User management
│       ├── lcnc/                       # Low-Code engine
│       ├── patients/                   # Patient management
│       ├── visits/                     # Visit workflows
│       ├── wards-beds/                 # Ward & bed management
│       ├── staff/                      # Staff management
│       ├── master-data/                # Configuration data
│       ├── audit/                      # Audit logs
│       └── analytics/                  # Dashboard metrics
├── migrations/                         # DB migrations
├── seeders/                            # Sample data
├── tests/                              # API tests
└── docker-compose.yml                  # Docker setup
```

## ▶️ Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- Docker (optional)

### Local Setup

1. **Install dependencies**
```bash
npm install
```

2. **Set up environment variables**
Create a `.env` file in the root directory:
```env
NODE_ENV=development
PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=hms_db
DB_USER=postgres
DB_PASSWORD=postgres

JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d

LOG_LEVEL=info
```

3. **Run database migrations**
```bash
psql -U postgres -d hms_db -f migrations/001_init.sql
```

4. **Seed sample data (optional)**
```bash
psql -U postgres -d hms_db -f seeders/seed.sql
```

5. **Start the server**
```bash
npm run dev
```

### Docker Setup

```bash
docker-compose up --build
```

The backend will be available at:
- **API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user (protected)

### Users
- `GET /api/users` - List all users (ADMIN only)
- `POST /api/users` - Create user (ADMIN only)
- `GET /api/users/:id` - Get user by ID (ADMIN only)
- `PUT /api/users/:id` - Update user (ADMIN only)
- `DELETE /api/users/:id` - Delete user (ADMIN only)

### Patients
- `GET /api/patients` - List all patients
- `POST /api/patients` - Create patient
- `GET /api/patients/:id` - Get patient by ID
- `PUT /api/patients/:id` - Update patient

### Visits
- `GET /api/visits` - List all visits
- `POST /api/visits` - Create visit
- `GET /api/visits/:id` - Get visit by ID
- `PUT /api/visits/:id/status` - Update visit status

### Wards & Beds
- `GET /api/wards/wards` - List all wards
- `POST /api/wards/wards` - Create ward (ADMIN only)
- `POST /api/wards/beds/assign` - Assign bed to visit
- `POST /api/wards/beds/release` - Release bed

### LCNC Forms
- `GET /api/lcnc/forms` - List all forms
- `POST /api/lcnc/forms` - Create form
- `GET /api/lcnc/forms/:id` - Get form by ID
- `DELETE /api/lcnc/forms/:id` - Delete form

### LCNC Rules
- `GET /api/lcnc/rules` - List all rules (ADMIN only)
- `POST /api/lcnc/rules` - Create rule (ADMIN only)
- `DELETE /api/lcnc/rules/:id` - Delete rule (ADMIN only)

### Analytics
- `GET /api/analytics/dashboard` - Dashboard metrics
- `GET /api/analytics/visits` - Visit statistics
- `GET /api/analytics/triage` - Triage distribution

## 🔐 Authentication

All protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## 🎯 Key Features

### Low-Code Engine (LCNC)
- **Form Engine**: Dynamic form builder with JSON schemas
- **Rules Engine**: Event-driven business rules without code
- **Report Engine**: Dynamic analytics and reporting

### Role-Based Access Control (RBAC)
- ADMIN: Full system access
- DOCTOR: Medical operations
- NURSE: Patient care operations
- STAFF: General operations
- PATIENT: Limited access

### Real-Time Updates
Socket.IO integration for live updates:
- Bed allocation notifications
- Visit status changes
- Emergency alerts

## 🧪 Testing

```bash
npm test
```

## 📝 License

ISC

## 🤝 Contributing

This is a hackathon project. Feel free to extend and improve!

---

**Built with ❤️ for Hospital Management**
