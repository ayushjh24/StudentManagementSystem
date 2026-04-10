# Student Management System - Full Stack (.NET + React)

## Zest India IT Pvt Ltd Technical Assignment

This project is a **Student Management System** built using:

* ASP.NET Core Web API
* React (Vite)
* SQL Server
* JWT Authentication

---

# 1. Assignment Task

Build a Student Management System with:

* Get all students
* Add new student
* Update student
* Delete student

---

# 2. Technical Requirements

* JWT Authentication
* Global Exception Handling (Middleware)
* Swagger API Documentation
* Layered Architecture (Controller, Service, Repository)

---

# 3. Database

**SQL Server**

Student Table:

| Column      | Type     |
| ----------- | -------- |
| Id          | int      |
| Name        | varchar  |
| Email       | varchar  |
| Age         | int      |
| Course      | varchar  |
| CreatedDate | datetime |

---

# 4. Features

### Authentication

* JWT Login
* Secure API Endpoints

### Student Management

* Add Student
* Get Students
* Update Student
* Delete Student

---

# 5. API Endpoints

## Auth

### Login

POST /api/Auth/login

Request:

```
{
  "username": "admin",
  "password": "admin123"
}
```

---

## Student APIs

### Get All Students

GET /api/Student

### Add Student

POST /api/Student

### Update Student

PUT /api/Student/{id}

### Delete Student

DELETE /api/Student/{id}

---

# 6. Backend Setup

### Step 1

Clone Repository

```
git clone https://github.com/ayushjh24/StudentManagementSystem.git
```

### Step 2

Navigate to project

```
cd StudentManagementSystem
```

### Step 3

Run Project

```
dotnet run
```

Swagger URL:

```
http://localhost:5057/swagger
```

---

# 7. Frontend Setup

### Step 1

Navigate to UI folder

```
cd studentmanagement-ui
```

### Step 2

Install Dependencies

```
npm install
```

### Step 3

Run UI

```
npm run dev
```

Frontend URL:

```
http://localhost:5173
```

---

# 8. Login Credentials

Username: admin
Password: admin123

---

# 9. Architecture

Controller → Service → Repository → Database

---

# 10. Security

* JWT Authentication
* Protected Endpoints
* Authorization

---

# 11. Swagger Documentation

Available at:

```
http://localhost:5057/swagger
```

---

# 12. Expected Output

* Working APIs
* Clean Architecture
* JWT Security
* Structured Code

---

# 13. Bonus Features

* React UI
* JWT Authentication
* Clean Architecture

---

# 14. Evaluation Criteria Covered

* Code Quality
* Architecture
* Error Handling
* Security
* API Functionality

---

# 15. Tech Stack

Backend

* .NET Core Web API
* SQL Server
* JWT

Frontend

* React
* Vite
* JavaScript

---

# 16. Author

Ayush Hirekhan
Full Stack Developer Candidate

---

# 17. GitHub Repository

https://github.com/ayushjh24/StudentManagementSystem
