# Character Explorer - Full Stack Application

A full-stack application for searching characters and maintaining a search history. It consists of a REST API backend built with Spring Boot and an interactive frontend with React.

## 📋 Project Description

Character Explorer is a web application that allows users to:

- Search for characters by ID
- View detailed character information
- Maintain a history of all searches performed
- Display search history with timestamps

## 🏗️ Project Architecture

```
Exercise-1/
├── ex1-back/          # Backend - Spring Boot REST API
└── ex1-front/         # Frontend - React + Vite
```

### Backend (ex1-back)

**Tech Stack:**

- **Java**: v21
- **Framework**: Spring Boot 4.0.5
- **Build Tool**: Gradle
- **Database**: PostgreSQL
- **ORM**: JPA/Hibernate
- **Validation**: Spring Validation

**Main Components:**

- `/controller`: CharacterController - REST endpoints
- `/service`: CharacterService - Business logic
- `/model`: Request - Entity for search history
- `/dto`: CharacterDto - Data transfer object
- `/repository`: RequestRepository - Data access
- `/config`: RestTemplate configuration

### Frontend (ex1-front)

**Tech Stack:**

- **Framework**: React 19
- **Build Tool**: Vite
- **Linter**: ESLint
- **Language**: JavaScript with ES6 modules

**Main Components:**

- `SearchCharacterSection.jsx` - Search form
- `CharacterCard.jsx` - Character display
- `HistorySection.jsx` - History section
- `RequestHistoryList.jsx` - Previous searches list
- `Hooks`: useCharacter, useRequestHistory

---

## 🚀 Quick Start

### Using Docker Compose (Recommended)

```bash
docker-compose up
```

This will start both the backend and frontend services. The application will be available at `http://localhost`

### Prerequisites for Local Development

- **Java 21** or higher
- **Node.js** 18+
- **PostgreSQL** 12+
- **Docker** and **Docker Compose** (for containerized setup)

---

## 📡 REST API Endpoints

### Backend - Base URL: `http://localhost:8080/api`

#### Get Character

```http
GET /api/character/{id}
```

**Parameters:**

- `id` (Long) - Character ID

**Response (200 OK):**

```json
{
  "id": 1,
  "name": "Luke Skywalker",
  "description": "...",
  "otherFields": "..."
}
```

#### Get Search History

```http
GET /api/requests
```

**Response (200 OK):**

```json
[
  {
    "id": 1,
    "characterId": 1,
    "timestamp": "2024-04-14T10:30:00",
    "characterName": "Luke Skywalker"
  }
]
```

---

## 🔧 Available Commands

### Backend

```bash
# Build the project
./gradlew build

# Run in development mode
./gradlew bootRun

# Run tests
./gradlew test

# Clean build artifacts
./gradlew clean

# Create Docker image
./gradlew bootBuildImage
```

### Frontend

```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🐳 Docker


The project includes a `docker-compose.yml` file (located in `ex1-back/`) that orchestrates all services with three main containers:

### Docker Compose Configuration

**Services:**

1. **db** - PostgreSQL 16 Alpine
  - Container: `ex1_db`
  - Database: `ex1_db`, User: `ex1_user`, Password: `ex1_password`
  - Port: `5432`
  - Data persistence via volume `postgres_data`
  - Health checks enabled to ensure database readiness before backend starts

2. **backend** - Spring Boot Application
  - Container: `ex1_backend`
  - Built from `./Dockerfile`
  - Port: `8080`
  - Depends on database service (waits for health check)
  - Environment variables configured for PostgreSQL connection

3. **frontend** - React + Vite (Node.js)
  - Container: `ex1_frontend`
  - Image: `node:22-alpine`
  - Port: `5173`
  - Command: `npm ci && npm run dev -- --host 0.0.0.0 --port 5173`
  - Mounts local `ex1-front/` directory for live development
  - Depends on backend service

### Quick Start

From the project root or `ex1-back/` directory:

```bash
docker-compose up
```

Access the application at:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8080/api`
- Database: `localhost:5432`
---

## 📝 Directory Structure

### Backend - ex1-back

```
ex1-back/
├── src/
│   ├── main/
│   │   ├── java/com/distribuida/ex1_back/
│   │   │   ├── controller/        # REST controllers
│   │   │   ├── service/           # Business logic
│   │   │   ├── model/             # JPA entities
│   │   │   ├── dto/               # DTOs
│   │   │   ├── repository/        # JPA repositories
│   │   │   ├── config/            # Configuration
│   │   │   └── Ex1BackApplication.java
│   │   └── resources/
│   │       └── application.yaml   # Configuration
│   └── test/                      # Unit tests
├── build.gradle                   # Dependencies and configuration
├── gradle/wrapper/                # Gradle Wrapper
└── Dockerfile
```

### Frontend - ex1-front

```
ex1-front/
├── src/
│   ├── components/
│   │   ├── SearchCharacterSection.jsx
│   │   ├── CharacterCard.jsx
│   │   ├── HistorySection.jsx
│   │   └── RequestHistoryList.jsx
│   ├── hooks/
│   │   ├── useCharacter.js
│   │   └── useRequestHistory.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── api.js                     # HTTP client
├── public/
├── package.json
├── vite.config.js
├── eslint.config.js
└── Dockerfile
```

---

## 🔐 Environment Variables

### Backend (application.yaml)

```yaml
spring:
  application:
    name: ex1-back
  datasource:
    url: jdbc:postgresql://localhost:5432/ex1_db
    username: ex1_user
    password: ex1_password
    driver-class-name: org.postgresql.Driver
  jpa:
    hibernate:
      ddl-auto: update
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
  server:
    port: 8080
```

### Frontend (api.js or .env)

```javascript
const API_BASE_URL = "http://localhost:8080/api";
```

---

## 🧪 Testing

### Backend

```bash
cd ex1-back
./gradlew test
```

Tests are located in `src/test/java/com/distribuida/ex1_back/`

### Frontend

To add tests, you can use libraries like **Vitest** or **Jest**:

```bash
cd ex1-front
npm install --save-dev vitest @testing-library/react
```

---

## 📚 Important Documentation

- **Spring Boot**: https://docs.spring.io/spring-boot/docs/current/reference/html/
- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **PostgreSQL**: https://www.postgresql.org/docs/

---

## ✨ Key Features

- ✅ Modern Full Stack (Spring Boot + React)
- ✅ REST API with CORS enabled
- ✅ Data persistence with PostgreSQL
- ✅ Search history tracking
- ✅ Responsive UI with React
- ✅ Hot reload in development
- ✅ Docker support
- ✅ Code linting (ESLint)

---

## 🛠️ Troubleshooting

### Backend cannot connect to database

- Verify PostgreSQL is running: `psql -U postgres`
- Check credentials in `application.yaml`
- Ensure database exists: `createdb ex1_db`

### Frontend cannot connect to backend

- Verify backend is running at `http://localhost:8080`
- Check that CORS is enabled in the controller
- Open browser console to see errors

### Port already in use

```bash
# On Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# On Linux/Mac
lsof -i :8080
kill -9 <PID>
```

---

## 📄 License

This project is part of the Distributed Architecture course.

---

## 👤 Author

Project information and student responsible for the project.

---

**Last updated**: April 2024
