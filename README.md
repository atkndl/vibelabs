# ⚡ VibeLabs — The AI App Studio

> **"We don't just write code. We vibe, iterate & scale AI apps."**  
> An AI-first product studio turning bleeding-edge foundation models into chart-topping consumer & pro apps.

---

## 🚀 Live Demo & Structure

- **Status**: Ready for Production & GitHub Pages
- **Stack**: Pure Modern Web (Semantic HTML5, CSS Variables, Glassmorphism, Vanilla JS, Canvas 60fps, Zero Build Steps)
- **Deployment Target**: GitHub Pages (instant static hosting with zero latency)

### 📂 File Structure

```text
VibeLabs/
├── index.html                   # Core semantic landing page & SEO tags
├── .nojekyll                    # GitHub Pages static bypass flag
├── .gitignore                   # Ignore rules
├── css/
│   └── style.css                # Obsidian theme, glassmorphic cards, animations
├── js/
│   ├── main.js                  # Terminal simulator, smartphone switcher, tilt, modal
│   └── canvas.js                # Ambient interactive neural constellation canvas
├── assets/
│   ├── logo.svg                 # VibeLabs gradient brand logo
│   └── favicon.svg              # Tab icon
└── .github/
    └── workflows/
        └── deploy.yml           # Automated GitHub Pages CI/CD pipeline
```

---

## 🎯 Features

1. **Codeway & HubX Aesthetic**: High-end dark theme (`#07080c`), glowing radial ambient lighting, subtle analog noise overlay, and crisp typographic hierarchy.
2. **Interactive Vibecoding Terminal**: Live in-browser prompt-to-app simulation with real-time logs, code synthesis feedback, and live preview card.
3. **Interactive Device Showcase**: Switch between 4 flagship apps (`VibeMotion AI`, `PromptPilot Pro`, `EchoVerse AI`, `AuraCam Vision`) and see real-time updates on a simulated iPhone mockup.
4. **Studio Methodology (Bento Grid)**: Explaining the 10x vibecoding advantage, autonomous agent swarms, and viral distribution loops.
5. **Interactive Contact & Pitch Modal**: Direct transmission modal for pitching apps or applying to the studio squad.
6. **Mobile Responsive**: 100% fluid across 4K displays, tablets, and smartphones.

---

## 🌐 GitHub Pages Deployment Guide

You can deploy this site to GitHub Pages in 2 simple steps:

### Option A: Direct Push via Git (Automated)

1. Create a new repository on GitHub (e.g. `vibelabs` or `<your-username>.github.io`).
2. Run in terminal:
   ```bash
   git init
   git add .
   git commit -m "feat: launch VibeLabs AI Studio site"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** → **Pages**
   - Under **Build and deployment** > **Source**:
     - Choose **GitHub Actions** (it will auto-detect `.github/workflows/deploy.yml` and deploy in seconds!)
     - *OR* choose **Deploy from a branch** → Branch: `main` / `(root)` → Click **Save**.
4. Your site will be live at:
   `https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/`
