# React + ASP.NET Core JWT Authentication (POC)

This is a proof-of-concept (POC) application demonstrating how to implement secure user authentication using **React.js** (frontend) and **ASP.NET Core Web API** (backend) with **JWT (JSON Web Tokens)**. The app includes **role-based access control** and token handling without using a database.

---

## 🔐 Features

- ✅ User login with hardcoded credentials
- ✅ JWT issuance and validation
- ✅ Role-based protected API endpoints (`Admin` / `User`)
- ✅ Secure token handling in frontend (via `sessionStorage`)
- ✅ React frontend using Axios, Context API, and React Router
- ✅ ASP.NET Core backend with authentication & authorization middleware

---

## 📦 Tech Stack

- **Frontend**: React.js, Axios, React Router, Context API
- **Backend**: ASP.NET Core Web API (.NET 6+), JWT, CORS
- **Auth**: JSON Web Tokens (JWT) with claims for roles

---

## 🚀 Getting Started

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/yourusername/react-dotnet-jwt-auth-poc.git
cd react-dotnet-jwt-auth-poc
