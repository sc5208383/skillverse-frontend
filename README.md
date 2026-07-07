# Skillverse — Learn to Code, One Language at a Time

**Live site:** https://skillverse-frontend-livid.vercel.app
**Backend API:** https://skillverse-backend-i5e8.onrender.com
**Repo:** Frontend (this repo) | [Backend](https://github.com/sc5208383/skillverse-backend)

Skillverse is a full-stack e-learning platform for a coding institute, teaching **Java, C, C++ and Python** through theory, mind maps, and video lessons — with multi-language UI support (English / Hindi / Marathi) and UPI-based enrollment.

![Tech](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Tech](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![Tech](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)
![Tech](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

---

## Features

- **Multi-language interface** — full UI translated across English, Hindi and Marathi
- **Real authentication** — signup/login with bcrypt-hashed passwords and JWT sessions (backend-verified, not just client-side)
- **Interactive syllabus** — SVG mind-maps per language, with step-by-step theory panels and curated video recommendations
- **UPI payment flow** — generates a live QR code and deep link for enrollment per course
- **Admin dashboard** — password-protected, auto-refreshing view of all registered students and their enrolled courses, backed by MongoDB
- **Installable as an Android app** — packaged as a PWA/APK via PWABuilder
- **Custom design system** — a circuit-board/PCB visual theme built from scratch (no template), tying the UI to the subject matter (programming)

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite |
| Backend | Node.js, Express |
| Database | MongoDB Atlas |
| Auth | bcrypt + JWT |
| Hosting | Vercel (frontend), Render (backend) |
| Payments | UPI intent links + QR (qrcode.react) |

## Architecture
