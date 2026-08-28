# 🕊️ Dove Nest Goa - Authentic Stay Experience

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)

An ultra-snappy, mobile-first web application engineered for Dove Nest—a private urban oasis in Santa Cruz, Panaji, Goa. Built to handle bookings, showcase media, and manage live calendar availability seamlessly.

## ✨ Core Features

*   **State-Driven Theme Engine:** Client-side Light/Dark mode toggling, persistently stored via `localStorage` to prevent unstyled flashes on reload.
*   **Zero-Friction WhatsApp Bookings:** Bypasses slow email servers. Form data is parsed and URL-encoded directly into pre-filled WhatsApp Business API links.
*   **Live Availability Grid:** Real-time calendar fetched via a lightweight Python REST API.
*   **Admin Control Panel:** Secure, hidden route for the property manager to lock dates instantly, syncing globally across the live site.
*   **Client-Side Guestbook:** Event-driven `localStorage` engine for instant visual feedback rendering without heavy database writes.
*   **Dynamic Media Masonry:** Vanilla JavaScript-powered filterable media gallery featuring authentic property visuals.

## 🗂️ Project Architecture

```text
dove-nest-goa/
├── index.html                  # Root Entry Point
├── frontend/                   # UI Architecture
│   ├── css/style.css           # Tailwind directives & CSS Variables
│   ├── js/main.js              # Global DOM & Theme State
│   └── js/booking.js           # WhatsApp API Router
└── backend/                    # Server Engine
    ├── app.py                  # Flask REST API
    ├── requirements.txt        # Backend dependencies
    └── bookings.json           # Flat-file JSON database
