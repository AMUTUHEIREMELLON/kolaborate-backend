# Developer Profile System

A talent profile management system with a REST API backend and React frontend for browsing and managing developer profiles. Built to meet the assessment requirements: create, list with pagination, update, search by skills/location, and a responsive dashboard.

Live project: https://kolaborate-frontend.vercel.app/

 Category: Technology ; Why Chosen ;

Frontend: React (Vite) ; Fast rendering, reusable components, simple routing ;
Backend : Node.js + Express ; Easy RESTful API setup, scalable for full-stack apps ;
Database : MongoDB Atlas ; Cloud-hosted NoSQL, great for flexible document models ;
Styling : Bootstrap / CSS ; Simple and responsive design ;
HTTP Client : Axios ; Promise-based, handles requests easily ;
Environment : dotenv ; Manage secrets securely ;
Deployment : Render(Backend) / Vercel(Frontend) ; Simple deployment support for MERN ;

## Setup Instructions
### Backend
1. Clone the repo and navigate to `backend/`.
2. Install dependencies: `npm install`.
3. Create `.env` with the following details(replace the username and password with yours):
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.5p6t7qp.mongodb.net/developer-profiles?retryWrites=true&w=majority
PORT=5000

4. Seed database: `node src/seed.js`.
5. Start server: `npm start` (runs on http://localhost:5000).

## Time Spent on Backend
3 hours (API endpoints, models, validation, tests for 2 endpoints).