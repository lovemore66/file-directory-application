# File Directory Application

This project consists of a frontend (Angular) and a backend (Node.js) that work together to allow users to view and interact with directory contents.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Docker
- Docker Compose
- Node.js (if you want to run the app locally without Docker)
- npm (for local dependency management)

## Getting Started

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/file-directory-application.git
cd file-directory-application

## Step 1: Build and Start the Docker Containers
cd into file-directory-application
docker-compose up --build

## Step 2: Access the Application
Once the containers are up, you can access the application in the following way:

Frontend (Angular app): http://localhost:4200
Backend (API): http://localhost:4000


## Backend Setup (Node.js)
1. Install Dependencies for the Backend
Navigate to the backend directory and install the required dependencies using npm:


cd backend
npm install
2. Start the Backend Locally
Start the backend server locally:

npm start
The backend API will be accessible at http://localhost:4000.

## Frontend Setup (Angular)
1. Install Dependencies for the Frontend
Navigate to the frontend directory and install the required dependencies using npm:

cd frontend
npm install
2. Start the Frontend Locally
Start the Angular frontend locally:

ng serve
The frontend application will be available at http://localhost:4200.

