# Login and Signup Learning Project

This project is a full-stack application designed to learn and implement robust **Login and Signup** functionality using modern web technologies.

## Tech Stack

- **Frontend:** React (Vite), CSS
- **Backend:** Node.js, Express, MongoDB (via Mongoose)
- **Authentication:** JWT (JSON Web Tokens), bcrypt

## Learning Objectives

- Building interactive user interfaces for authentication.
- Implementing secure password hashing and token-based authentication.
- Managing user state and protected routes in React.
- Handling API requests between frontend and backend with a document-oriented database (MongoDB).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/products/platform/atlas-database) Atlas or a local instance.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. **Backend Setup:**
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory and add your environment variables:
     ```env
     PORT=5000
     MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/auth_db
     JWT_SECRET=your_secret_key
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup:**
   - Navigate to the `frontend` folder:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

## Project Structure

- `backend/`: Express server, controllers, models, and routes.
- `frontend/`: React application with components for Login and Signup.

## Deployment Guide

For a full-stack application like this, I recommend using **Render**, **Railway**, or **Vercel** (with serverless functions).

### 1. Database
- Use **MongoDB Atlas** for a free managed cluster.
- Get your connection string (URI).

### 2. Backend (Render/Railway)
- Connect your GitHub repository.
- Set the **Root Directory** to `backend`.
- Use the **Start Command**: `npm start`.
- Add **Environment Variables**:
    - `MONGO_URI`
    - `JWT_SECRET` (generate a long random string)
    - `PORT` (usually 5000 or 8080)

### 3. Frontend (Vercel/Netlify/Render)
- Connect your GitHub repository.
- Set the **Root Directory** to `frontend`.
- Set the **Build Command**: `npm run build`.
- Set the **Output Directory**: `dist`.
- Add **Environment Variables**:
    - `VITE_API_URL`: The URL of your deployed backend.
