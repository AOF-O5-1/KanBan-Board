# Secure Kanban Board Application

A full-stack Kanban board application with JWT authentication, built using React, TypeScript, and PostgreSQL.

## Features

- **Secure Authentication**
  - JSON Web Token (JWT) based authentication
  - Secure password handling
  - Session management with automatic timeout
  - Protected routes and API endpoints

- **Kanban Board Functionality**
  - Create, update, and delete tasks
  - Drag-and-drop task management
  - Multiple status columns (To Do, In Progress, Done)
  - Real-time updates

## Technology Stack

- **Frontend**
  - React with TypeScript
  - Vite for build tooling
  - Modern CSS for styling
  - Local storage for JWT management

- **Backend**
  - Node.js with TypeScript
  - Express.js for API routing
  - PostgreSQL database
  - JWT for authentication

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Install dependencies:
```bash

npm install
```

2. Initialize the database:
```bash
cd server
npm run seed
```

3. Start the development servers:
```bash
cd server
npm run build && npm start

cd client 
npm run build && npm start
```

## Usage


Log in with your credentials
Start managing your tasks on the Kanban board

Authentication Flow

Users must log in with valid credentials
JWT is stored securely in local storage
The session expires after a period of inactivity
Protected routes require valid JWT
Automatic redirect to log in for unauthorized access

Deployment
The application is deployed on Render:

Full stack: Web Service 
Database: Render PostgreSQL

Access the deployed application at: [kRAZY KANBAN (https://kanban-board-jx03.onrender.com)]
Security Features

Secure password hashing
JWT token expiration
Protected API endpoints
CORS configuration
SSL/TLS encryption in production
Input validation and sanitization

## Contact
GitHub: [AOF-05-1](https://github.com/AOF-O5-1)
Email: [Ade Fajemisin](marcusfajemisin@gmail.com)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
