# Portfolio

Personal portfolio website for Sean Lloyd Harold Raquel - Web Developer, AI Orchestrator, and Cybersecurity Enthusiast.

## 🚀 Tech Stack

- **Frontend**: HTML5, TailwindCSS, Alpine.js
- **Deployment**: Cloudflare Workers/Pages
- **Security**: CSP, HSTS, Anti-clickjacking headers

## 🛠️ Local Development

Simply open `index.html` in your browser. No build process required!

## 📦 Deployment

### Cloudflare Workers (Current Setup)

```bash
npx wrangler deploy
```

### Cloudflare Pages (Alternative)

1. Push to GitHub
2. Connect repository in Cloudflare Pages dashboard
3. Build settings:
   - Build command: *(leave empty)*
   - Build output directory: `/`
   - Framework preset: `None`

## 🔒 Security Features

- Content Security Policy (CSP)
- HTTP Strict Transport Security (HSTS)
- X-Frame-Options (Anti-clickjacking)
- X-Content-Type-Options (MIME sniffing prevention)
- Referrer Policy
- Permissions Policy

## 📄 License

© 2026 Sean Lloyd Harold Raquel. All rights reserved.
