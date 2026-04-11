# Switch It — Smart Logistics Solutions

A professional landing site for Switch It Private Limited, built with the MERN stack (MongoDB, Express, React 19, Node.js).

---

## 🚀 Quick Start

### 1. Install Prerequisites

- **Node.js 18+** — [nodejs.org](https://nodejs.org/)
- **MongoDB** — Atlas (recommended) or local Community Edition

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

```bash
cp .env.example .env
# Edit .env with your MongoDB URI and email credentials
```

Key variables:

| Variable | Required | Description |
|---|---|---|
| `MONGODB_URI` | ✅ | MongoDB connection string |
| `ADMIN_EMAIL` | Optional | Email to receive contact/review alerts |
| `SMTP_HOST` | Optional | SMTP server for email (e.g. `smtp.gmail.com`) |
| `SMTP_USER` | Optional | SMTP username |
| `SMTP_PASS` | Optional | SMTP password / App Password |
| `ADMIN_TOKEN` | Optional | Secret token for review approval API |

### 4. Seed Initial Reviews

```bash
npm run seed
```

### 5. Start Development Server

```bash
npm run dev
```

- App: http://localhost:3000
- API health: http://localhost:3000/api/health

### 6. Production Build

```bash
npm run build
npm start
```

---

## 📡 API Reference

### Health
```
GET /api/health
```

### Contact Form
```
POST /api/contact
Body: { name, email, subject, message }
Rate limit: 5 requests / 15 min per IP
```

### Reviews
```
GET  /api/reviews?page=1&limit=12       — Fetch approved reviews (paginated)
POST /api/reviews                       — Submit a review (goes to moderation queue)
Body: { name, role, content, rating }
Rate limit: 3 submissions / hour per IP

POST /api/reviews/:id/approve           — Approve a review (admin only)
Header: x-admin-token: <ADMIN_TOKEN>
```

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, Tailwind CSS 4, shadcn/ui, Framer Motion, react-hot-toast |
| Backend | Node.js, Express 4, TypeScript |
| Database | MongoDB via Mongoose 8 |
| Validation | express-validator |
| Rate Limiting | express-rate-limit |
| Security | helmet, cors |
| Email | Nodemailer |
| Logging | Winston |
| Build | Vite 6 |

---

## 📂 Project Structure

```
switch-it/
├── server.ts              # Express backend (MongoDB, models, routes)
├── scripts/
│   └── seed.ts            # One-time DB seeder for initial reviews
├── src/
│   ├── App.tsx            # Router + lazy-loaded pages + Toaster
│   ├── components/
│   │   ├── PageLoader.tsx # Suspense fallback
│   │   └── ...            # Navbar, Hero, Services, etc.
│   └── pages/
│       ├── Reviews.tsx    # Fetches from API, skeleton loaders, moderation-aware
│       ├── Contact.tsx    # Google Maps embed, toast feedback
│       └── ...
├── .env.example           # All environment variables documented
└── package.json
```

---

## 📬 Email Notifications (Nodemailer)

When configured via SMTP env vars, the server automatically emails `ADMIN_EMAIL`:
- On every contact form submission (full details)
- On every new review submission (with a link reminder to approve)

Works with any SMTP provider. For **Gmail**, generate an **App Password** (requires 2FA) from your Google account settings and use that as `SMTP_PASS`.

---

## 🔐 Review Moderation

Reviews submitted via the form are saved with `approved: false` — they don't appear on the public page until you approve them.

To approve a review, send:

```bash
curl -X POST https://yoursite.com/api/reviews/<REVIEW_ID>/approve \
  -H "x-admin-token: your_admin_token_from_env"
```

---

## 🗺 Google Maps

The Contact page includes a Google Maps iframe. To enable it:
1. Get a free Maps Embed API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Replace `AIzaSyD-PLACEHOLDER` in `src/pages/Contact.tsx` with your real key
3. The page also includes a direct Google Maps link as a fallback

---

## 🚢 Deployment Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Use a strong random `ADMIN_TOKEN`
- [ ] Set `ALLOWED_ORIGINS` to your domain
- [ ] Use MongoDB Atlas with IP allowlist
- [ ] Enable SSL/TLS on the server (nginx reverse proxy recommended)
- [ ] Run `npm run build` before `npm start`