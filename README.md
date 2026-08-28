# 🕊️ Dove Nest Goa - Authentic Stay Experience

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)

An ultra-snappy, mobile-first web application built for Dove Nest — a private, authentic stay in Santa Cruz, Panaji, Goa. The site focuses on fast bookings, beautiful media presentation, and a light-weight backend for live availability and admin controls.

## ✨ Highlights & New Additions

- Mobile-first responsive UI with Tailwind utility classes and custom CSS variables.
- Persistent Light/Dark theme engine that prevents unstyled flashes by reading/writing to `localStorage` on page load.
- WhatsApp-first booking flow: booking forms are encoded directly into prefilled WhatsApp messages so guests can book instantly without waiting on email delivery.
- Animated PNG floaters and subtle motion to bring the site to life while keeping performance fast on mobile.
- Google Maps review flow: link users to the property review page and prefill review prompts where applicable.
- Dynamic, filterable masonry gallery with expandable gallery items and responsive filters.
- Live availability grid powered by a tiny Flask REST API (no heavy DB required) with a flat-file JSON store for bookings.
- Admin control panel (hidden route) for the property manager to lock/unlock dates; changes sync across the live frontend.
- Client-side guestbook using `localStorage` for instant feedback without extra backend writes.

## 🗂️ Project Structure

```text
dove-nest-goa/
├── index.html                  # Root Entry Point (landing and main UI)
├── assets/                     # All static images, floaters, icons
├── frontend/                   # Frontend source files
│   ├── css/style.css           # Tailwind directives & CSS variables
│   ├── js/main.js              # Global DOM helpers, theme state, and init
│   ├── js/booking.js           # Booking form -> WhatsApp router
│   ├── frontend/gallery.html   # Gallery markup and example <figure> blocks
│   └── js/gallery.js           # Gallery filter + masonry and expand logic
└── backend/                    # Lightweight backend service
    ├── app.py                  # Flask REST API (availability endpoints + admin)
    ├── requirements.txt        # Backend dependencies (Flask + small libs)
    └── bookings.json           # Flat-file JSON database (persisted bookings/locks)
```

## 🚀 Quickstart — Local Development

Prerequisites:
- Python 3.9+ (for the backend)
- Node.js (only if you use tooling for Tailwind — otherwise the CSS is prebuilt)

Backend (API):

1. Create and activate a virtual environment:

   python -m venv .venv
   source .venv/bin/activate   # macOS / Linux
   .\.venv\Scripts\activate  # Windows PowerShell

2. Install Python dependencies:

   pip install -r backend/requirements.txt

3. Run the Flask app (development):

   # from repository root
   cd backend
   export FLASK_APP=app.py
   export FLASK_ENV=development
   flask run --host=127.0.0.1 --port=5000

The backend serves the availability data and admin endpoints used by the frontend. Check backend/app.py for the exact routes and payload structure.

Frontend (static):

- Open index.html in a browser (served from a simple static server or via live-reload). If you run Tailwind tooling, rebuild CSS according to your usual workflow.


## 📸 Adding Gallery Images

To add more gallery pictures:

1. Place the image file into the `assets/` directory.
2. Open `frontend/gallery.html` and copy an existing `<figure class="gallery-item" data-category="...">` block.
3. Update the `<img src="...">` filename and `alt` text; adjust the `data-category` value to match the new image's category so it appears in filter groups.
4. If you need a new category, add a matching filter button in the gallery controls and ensure `js/gallery.js` recognizes it (it reads `data-category` values).

Gallery items follow the pattern:

```html
<figure class="gallery-item" data-category="beach">
  <img src="assets/dsc_001.jpg" alt="Patio view at sunrise">
  <figcaption>Patio view at sunrise</figcaption>
</figure>
```

## 🔒 Admin Panel & Managing Availability

The admin panel is a hidden route in the frontend that allows the property manager to lock/unlock dates. Behind the scenes the panel writes locks into `backend/bookings.json` via the Flask API. For safety the repo uses a flat-file store — if you deploy to a multi-instance environment, replace it with a proper DB or shared store.

Check `backend/app.py` for the admin endpoints and authentication (if present). When you lock dates in the admin panel, the frontend availability grid will fetch the updated availability on the next refresh.

## 💬 WhatsApp Booking Flow

The booking form is processed client-side and encoded into a prefilled WhatsApp Business link. This removes friction caused by slow or unreliable email providers and leverages the ubiquity of WhatsApp for instant guest communication. For international guests ensure the phone number is formatted with country code.

Example behavior:
- User fills dates & guest info -> JS builds a URL -> window.open(prefilled_whatsapp_url)

If you want to capture bookings server-side as well, add a secondary POST to the Flask API (the current default is to keep bookings local to the WhatsApp flow and the flat-file bookings.json for locked dates).

## 🎨 Theme & Motion

- Theme: The theme engine initializes before the page is painted to avoid flashes. The user's preference is stored in `localStorage` and can be toggled via the UI.
- Motion: Small animated PNG floaters are used as decorative elements. They’re optimized for mobile (small file sizes) and disabled/reduced on low-power devices using prefers-reduced-motion checks.

## 🧩 Implementation Notes

- The site avoids heavy client frameworks — it’s built with vanilla JS and small utility functions to keep performance excellent on low-end devices.
- Use the flat `bookings.json` carefully; it’s simple and reliable for single-instance hosting but not suitable for high-concurrency scenarios.

## 🛠️ Contributing

Feel free to open issues or PRs for fixes, features, or content updates (gallery, copy edits, or images). If you submit code changes, include a clear description and keep changes scoped.

## 📞 Contact / Credits

- Maintainer: fuelerz (GitHub)
- For bookings or collaboration contact via the WhatsApp booking button on the site or open an issue here.

## 📜 License

MIT — see LICENSE file for details.
