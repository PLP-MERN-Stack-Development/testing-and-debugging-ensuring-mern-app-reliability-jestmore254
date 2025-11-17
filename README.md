# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---


         MERN Bug Tracker Assignment
Project Description

This is a MERN stack bug tracker application designed as part of an assignment.
It allows users to:

Report bugs

Track bug status

Manage user accounts

The project is split into backend (Node.js + Express + MongoDB) and frontend (React + Vite).
It demonstrates CRUD operations, REST APIs, and frontend-backend integration.

Project Structure
mern-bug-tracker/
│
├─ backend/
│  ├─ server.js               # Main backend server file
│  ├─ package.json            # Backend dependencies
│  ├─ .env                    # Environment variables
│  ├─ models/                 # Mongoose models
│  │  └─ Bug.js
│  ├─ routes/                 # API routes
│  │  └─ bugRoutes.js
│  └─ controllers/            # Controllers for handling requests
│     └─ bugController.js
│
├─ frontend/
│  ├─ package.json            # Frontend dependencies
│  ├─ vite.config.js
│  ├─ tailwind.config.js      # Optional if using Tailwind
│  ├─ postcss.config.js
│  ├─ src/
│  │  ├─ main.jsx             # Frontend entry point
│  │  ├─ index.css
│  │  ├─ App.jsx
│  │  ├─ components/
│  │  │  ├─ Navbar.jsx
│  │  │  └─ Footer.jsx
│  │  ├─ pages/
│  │  │  ├─ Home.jsx
│  │  │  ├─ BugList.jsx
│  │  │  └─ AddBug.jsx
│  │  └─ services/
│  │     └─ api.js            # Axios or fetch API requests
│
└─ README.md

Setup and Deployment Instructions
1. Backend Setup

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Create a .env file and add your environment variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string


Add scripts to package.json if missing:

"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}


Start backend server:

npm run dev


Confirm server is running by visiting http://localhost:5000 or checking terminal output.

2. Frontend Setup

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Run the frontend server:

npm run dev


Open the URL displayed in terminal (usually http://localhost:5173/) in your browser.

3. Testing the Application

Open frontend in browser and navigate pages (Home, Add Bug, Bug List).

Add a new bug → check if it appears in Bug List.

Inspect network requests to ensure frontend communicates with backend.

4. Optional: Deploy Online

Backend: Use Render.com or Railway.app → connect GitHub repo → deploy → get API URL.

Frontend: Use Vercel or Netlify → connect GitHub repo → deploy → get public site.

Make sure frontend API points to backend URL using environment variables.

5. Notes

Ensure MongoDB is running locally or provide a cloud MongoDB URI.

For development, npm run dev is preferred to auto-reload on code changes.

The project uses modern React (hooks) and Axios for API calls.