<div align="center">
  <img src="frontend/public/spotly-logo.png" alt="Spotly Logo" width="120" />
  
  # Spotly
  ### *Find & Share Parking Easily*

  A smart parking marketplace that helps users find nearby parking spaces and allows private owners to list and earn from their unused parking areas.
</div>

---

## 📌 Problem Statement

**"Why do drivers circle markets for 20 minutes finding parking?"**

Shoppers and visitors in crowded areas waste significant time searching for parking, leading to traffic congestion, fuel wastage, and frustration. At the same time, many private spaces remain unused due to lack of visibility and access.

📊 **Source:** Razorpay Fix My Itch
- 🔴 **Severity Score:** 6
- 💰 **TAM Score:** 6
- ⚪ **Whitespace Score:** 6.5
- 🔁 **Frequency Score:** 8
- 🔥 **Itch Score:** 81

---

## 💡 Solution — Spotly

Spotly solves this problem by creating a **parking marketplace platform** where:
* Users can find nearby parking spaces instantly
* Both **Free (mall/hotel)** and **Paid (private)** parking options are available
* Private owners can list their parking and earn passive income
* Users can check availability and book slots effortlessly

---

## ✨ Core Features

### 🟢 Driver Features
* 🔍 **Search:** Find nearby free and paid parking options
* 📊 **Live Slots:** Check real-time slot availability (Available / Occupied)
* 📅 **Booking System:** Reserve your spot ahead of time
* 📜 **History:** Track past bookings and expenses

### 🧑‍💼 Owner Features
* ➕ **Listing Management:** Add and edit parking spaces
* 💰 **Dynamic Pricing:** Set custom pricing for your paid parking
* 📊 **Dashboard:** Manage slots, earnings, and operations
* 📥 **Bookings:** View upcoming and active reservations

### 🔐 Authentication
* Role-based access control (Driver vs. Owner)
* Google OAuth integration (Firebase Authentication)

---

## 🎨 Design System & UI

🔗 **[Figma Design Prototype](https://www.figma.com/proto/Q5g11pgHEQtMWXtZdnLAz7/Full-stack-projects?node-id=1-2285&p=f&viewport=711%2C1411%2C0.33&t=A6EA72OBfkH2O8Yd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2285&page-id=0%3A1)**

Our interface is built following a Modern SaaS Dashboard aesthetic:
* **Primary:** `#0066FF` (Blue)
* **Secondary:** `#64748B` (Slate)
* **Accent:** `#CC4204` (Orange)
* **Typography:** Inter (Clean, readable sans-serif)
* **Theme:** Light UI with soft shadows, glassmorphism, and smooth micro-animations.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Lucide React (Icons)

**Backend:**
- Node.js
- Express.js

**Database & Auth:**
- MongoDB / JSON (Data Storage)
- Firebase (Google Auth)

---

## 📁 Architecture & Structure

The codebase is organized using a domain-driven structure to maximize scalability and maintainability:

```text
Spotly/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── auth/         # Login & Signup components
    │   │   ├── common/       # Reusable UI components
    │   │   └── landing/      # Public-facing components (Hero, FAQ)
    │   ├── pages/
    │   │   ├── auth/         # Login, Selection, Signup pages
    │   │   ├── common/       # Shared pages (Profile, Notifications, Messages)
    │   │   ├── driver/       # Driver dashboard, Booking, Checkout
    │   │   ├── landing/      # Landing page, Pricing, Host info
    │   │   └── owner/        # Owner dashboard, Add Parking, Bookings
    │   └── routes/           # App routing logic
```

---

## 🖥️ App Routes

| Domain | Page             | Route             | Access    |
| ------ | ---------------- | ----------------- | --------- |
| Public | Landing Page     | `/`               | Public    |
| Public | Host Info        | `/host`           | Public    |
| Public | Pricing          | `/pricing`        | Public    |
| Auth   | Role Selection   | `/register`       | Public    |
| Auth   | Driver Signup    | `/register/driver`| Public    |
| Auth   | Owner Signup     | `/register/owner` | Public    |
| Auth   | Login            | `/login`          | Public    |
| Driver | Driver Dashboard | `/driver`         | Protected |
| Driver | Checkout         | `/checkout`       | Protected |
| Owner  | Owner Dashboard  | `/owner`          | Protected |
| Owner  | Add Parking      | `/owner/add-parking`| Protected |
| Common | Profile          | `/profile`        | Protected |

---

## 🚀 Project Status

* ✅ Figma Design Completed
* ✅ Domain-Driven Project Restructuring Completed
* ⏳ Development in Progress

---

## 📌 Future Scope

* 🗺️ **Map Integration:** Google Maps API for live turn-by-turn navigation
* ⏱️ **Real-time Updates:** WebSocket integration for live slot tracking
* 💳 **Payment System:** Stripe/Razorpay integration for seamless checkouts
* 🚗 **Live Valet Tracking:** Tracking for premium valet features

---

## 👨‍💻 Developer

**Nitish Kumar**

---

## 📊 Problem Validation

This project is based on a real-world validated problem from the Razorpay Fix My Itch index, demonstrating strong market demand and high frequency, making it an ideal candidate for a scalable solution.
