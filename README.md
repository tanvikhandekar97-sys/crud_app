# User CRUD MERN App

This is a simple full‑stack CRUD application built while learning the MERN stack. The goal of this project was to understand how frontend, backend, and database connect together in a practical workflow rather than just theory.

It allows adding, viewing, updating, and deleting user information with persistent storage using MongoDB.

---

## Why I Built This

I wanted hands‑on experience with:

* Connecting React frontend with a Node/Express backend
* Working with MongoDB for real data storage
* Creating REST APIs
* Managing project structure for a full‑stack app
* Understanding how data flows between UI → API → database

This project helped me move beyond mock data and implement an actual backend.

---

## Features

* Add user details
* View all users
* Edit existing users
* Delete users
* Persistent MongoDB database storage
* Basic responsive UI

---

## Tech Stack

### Frontend

* React.js
* Fetch API
* CSS

### Backend

* Node.js
* Express.js
* MongoDB with Mongoose

---

## Project Structure

```
crud/
 ├── backend/
 │   ├── models/
 │   ├── routes/
 │   ├── server.js
 │   └── package.json
 ├── src/
 │   ├── components/
 │   ├── App.jsx
 │   └── main.jsx
 └── README.md
```

---

## Setup Instructions

### 1. Clone repository

```
git clone https://github.com/tanvikhandekar97-sys/crud_app.git
cd crud_app/crud
```

### 2. Backend setup

```
cd backend
npm install
node server.js
```

Make sure MongoDB service is running locally.

Default connection:

```
mongodb://localhost:27017/usersDB
```

### 3. Frontend setup

Open another terminal:

```
npm install
npm run dev
```

App usually runs on:

```
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint   | Purpose         |
| ------ | ---------- | --------------- |
| GET    | /users     | Fetch all users |
| POST   | /users     | Add new user    |
| PUT    | /users/:id | Update user     |
| DELETE | /users/:id | Remove user     |

---

## What I Learned

* How REST APIs work in real projects
* Handling frontend‑backend communication
* MongoDB schema design basics
* Debugging connection issues (CORS, ports, database setup)
* Structuring a MERN project properly

---

## Future Improvements

Some things I may add later:

* Authentication/login system
* Better UI design
* Deployment to cloud
* Environment variable configuration

---

## Author

**Tanvi Khandekar**

---

If you’re reviewing this project, feedback is always welcome 🙂
