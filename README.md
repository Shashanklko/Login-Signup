# Login and Signup Learning Project

This project is a full-stack application designed to learn and implement robust **Login and Signup** functionality using modern web technologies.

## Tech Stack

- **Frontend:** React (Vite), CSS
- **Backend:** Node.js, Express, MongoDB (via Mongoose)
- **Authentication:** JWT (JSON Web Tokens), bcryptjs

## Learning Objectives

- Building interactive user interfaces for authentication.
- Implementing secure password hashing and token-based authentication.
- Managing user state and protected routes in React.
- Handling API requests between frontend and backend.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance.

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
   - Create a `.env` file in the `backend` directory and add your environment variables (e.g., `MONGO_URI`, `JWT_SECRET`).
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
