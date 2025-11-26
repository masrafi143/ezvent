
# EzVent - Event Management Platform

EzVent is a full-stack event management platform built with **Next.js**, **NextAuth**, **Tailwind CSS**, and a custom backend API. Users can register, login (Email + Google OAuth), create events, manage bookings, and explore events.

---

## 🚀 Features

### 🔐 Authentication
- Email & Password Login
- Google OAuth Login
- Registration with profile info (name, email, photo, phone, address)
- Protected routes using NextAuth

### 🎉 Event Features
- Create events
- Update/Delete events
- View all events
- View event details
- Book events

---

## 🛠️ Tech Stack

### Frontend
- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- **DaisyUI**
- **NextAuth.js**

### Backend
- **Node.js / Express.js** (Server)
- **MongoDB** (Database)


---

## 🔧 Setup & Installation

### 1. Clone the project

git clone https://github.com/masrafi143/ezvent.git

### 2. Install dependencies

npm install

### 3. Create `.env.local`

GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret

### 4. Run the project

npm run dev

App will run at: http://localhost:3000

---
