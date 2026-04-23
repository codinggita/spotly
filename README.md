# Spotly

### "Find & Share Parking Easily"

A smart parking marketplace that helps users find nearby parking spaces and allows private owners to list and earn from their unused parking areas.

---

## 🌟 Figma Design

🔗 https://www.figma.com/proto/Q5g11pgHEQtMWXtZdnLAz7/Full-stack-projects?node-id=1-2285&p=f&viewport=711%2C1411%2C0.33&t=A6EA72OBfkH2O8Yd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2285&page-id=0%3A1

---

## 📌 Problem Statement

**"Why do drivers circle markets for 20 minutes finding parking?"**

Shoppers and visitors in crowded areas waste significant time searching for parking, leading to traffic congestion, fuel wastage, and frustration. At the same time, many private spaces remain unused due to lack of visibility and access.

📊 Source: Razorpay Fix My Itch

* 🔴 Severity Score: 6
* 💰 TAM Score: 6
* ⚪ Whitespace Score: 6.5
* 🔁 Frequency Score: 8
* 🔥 Itch Score: 81

---

## 💡 Solution — Spotly

Spotly solves this problem by creating a **parking marketplace platform** where:

* Users can find nearby parking spaces instantly
* Both **Free (mall/hotel)** and **Paid (private)** parking options are available
* Private owners can list their parking and earn money
* Users can check availability and book slots easily

---

## ✨ Features

### 🟢 Driver Features

* 🔍 Search nearby parking
* 🆓 Free & 💰 Paid parking options
* 📊 Slot availability (Available / Occupied)
* 📅 Easy booking system
* 📜 Booking history

---

### 🧑‍💼 Owner Features

* ➕ Add parking spaces
* 💰 Set pricing for paid parking
* 📊 Manage slots
* 📥 View bookings

---

### 🔐 Authentication

* Continue with Google (Firebase Authentication)

---

## 🎨 Design System

* 🔵 Primary Color: #0066FF

* ⚫ Secondary: #64748B

* 🟠 Accent: #CC4204

* ⚪ Neutral: #757682

* Font: Inter

* Style: Modern SaaS Dashboard

* Theme: Light UI with clean cards and soft shadows.

---

## 🛠️ Tech Stack (Planned)

### Frontend

* React.js
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB / JSON

### Tools

* Firebase (Google Auth)

---

## 🖥️ Pages

| Page             | Route        | Access    |
| ---------------- | ------------ | --------- |
| Landing Page     | /            | Public    |
| Role Selection   | /role        | Public    |
| Driver Dashboard | /dashboard   | Protected |
| Parking Details  | /parking/:id | Protected |
| Booking          | /booking     | Protected |
| Owner Dashboard  | /owner       | Protected |

---

## 📁 Folder Structure

Spotly/
├── frontend/
├── backend/
├── README.md

---

## 🚀 Project Status

* ✅ Figma Design Completed
* ⏳ Development in Progress

---

## 📌 Future Scope

* Real-time parking updates
* Map integration
* Payment system
* Live valet tracking

---

## 👨‍💻 Developer

Nitish Kumar

---

## 📊 Problem Validation

Source: Razorpay Fix My Itch

This project is based on a real-world validated problem with strong demand and frequency, making it suitable for practical implementation.
