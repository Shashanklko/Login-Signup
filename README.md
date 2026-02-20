# Login and Signup Learning Project

This project is a full-stack application designed to learn and implement robust **Login and Signup** functionality using modern web technologies.

## Tech Stack

- **Frontend:** React (Vite), CSS
- **Backend:** Node.js, Express, MySQL (via Sequelize)
- **Authentication:** JWT (JSON Web Tokens), bcrypt

## Learning Objectives

- Building interactive user interfaces for authentication.
- Implementing secure password hashing and token-based authentication.
- Managing user state and protected routes in React.
- Handling API requests between frontend and backend with a relational database (MySQL).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MySQL](https://www.mysql.com/) installed or a cloud database instance.

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
     DB_NAME=auth_db
     DB_USER=root
     DB_PASSWORD=your_password
     DB_HOST=localhost
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

For a full-stack application like this, I recommend using **Render** or **Railway** as they can handle both the frontend, backend, and the MySQL database.

### 1. Database
- Use a managed MySQL service (like **Aiven**, **Railway**, or **PlanetScale**).
- Once created, note your connection details (Host, User, Password, DB Name).

### 2. Backend (Render/Railway)
- Connect your GitHub repository.
- Set the **Root Directory** to `backend`.
- Use the **Start Command**: `npm start`.
- Add **Environment Variables**:
    - `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`
    - `JWT_SECRET` (generate a long random string)
    - `PORT` (usually 5000 or 8080)

### 3. Frontend (Vercel/Netlify/Render)
- Connect your GitHub repository.
- Set the **Root Directory** to `frontend`.
- Set the **Build Command**: `npm run build`.
- Set the **Output Directory**: `dist`.
- Add **Environment Variables**:
    - `VITE_API_URL`: The URL of your deployed backend.

> [!NOTE] 
> **Why not use Vercel for everything?**
> While Vercel is amazing for the frontend, it uses **Serverless Functions** for backends. This Express project is built as a **Persistent Server**. To run it on Vercel, you would need additional configuration (`vercel.json`) and you might face issues with database connection pooling or "cold starts". Render and Railway are easier for standard Express apps because they keep the server running 24/7.
