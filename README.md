# 🚀 Agency.AI — Digital Agency Landing Page

A modern, responsive landing page for a digital agency built with **React**, **Vite**, and **Tailwind CSS v4**. Features smooth scroll-triggered animations, dark/light theme toggle, a working contact form, and a fully responsive mobile navigation.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- **Hero Section** — Eye-catching headline with gradient text and animated entrance
- **Trusted By** — Logo carousel showcasing partner brands (Google, Airbnb, Zoom, etc.)
- **Services** — Four service cards (Advertising, Content Marketing, Content Writing, Social Media) with staggered animations
- **Our Work** — Portfolio showcase with project previews
- **Team** — Meet the team section
- **Contact Form** — Fully functional contact form powered by [Web3Forms](https://web3forms.com/) with toast notifications
- **Dark / Light Theme** — Toggle between themes with state persisted in `localStorage`
- **Smooth Animations** — Scroll-triggered animations using [Motion (Framer Motion)](https://motion.dev/)
- **Responsive Design** — Fully responsive with mobile hamburger menu
- **Smooth Scrolling** — Anchor navigation with CSS `scroll-smooth`

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19 | UI library |
| [Vite](https://vite.dev/) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first CSS framework |
| [Motion](https://motion.dev/) | 12 | Scroll-triggered animations |
| [React Hot Toast](https://react-hot-toast.com/) | 2 | Toast notifications |
| [Web3Forms](https://web3forms.com/) | — | Contact form backend |

---

## 📁 Project Structure

```
AI_AGENECY/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # Images, icons, logos, and asset index
│   │   ├── assets.js        # Central asset exports
│   │   ├── logo.svg
│   │   ├── hero_img.png
│   │   └── ...
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky navbar with mobile sidebar
│   │   ├── Hero.jsx         # Hero section with CTA
│   │   ├── TrustedBy.jsx    # Brand logo carousel
│   │   ├── Services.jsx     # Services grid
│   │   ├── ServiceCard.jsx  # Individual service card
│   │   ├── OurWork.jsx      # Portfolio section
│   │   ├── Teams.jsx        # Team members section
│   │   ├── ContactUs.jsx    # Contact form (Web3Forms)
│   │   ├── Footer.jsx       # Site footer
│   │   ├── Title.jsx        # Reusable section title
│   │   └── ThemeToggleBtn.jsx # Dark/Light toggle button
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind config
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── package.json
├── eslint.config.js
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or **yarn** / **pnpm**)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Raushan1504/Agency-AI.git
   cd Agency-AI
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to `http://localhost:5173` (default Vite port).

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "ready for deployment"
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in with your GitHub account.

3. **Click "Add New..." → "Project"**

4. **Import your GitHub repository** — Search for `Agency-AI` (or `AI_AGENECY`) and click **Import**.

5. **Configure the project** — Vercel auto-detects Vite. Verify these settings:

   | Setting | Value |
   |---|---|
   | **Framework Preset** | Vite |
   | **Build Command** | `npm run build` |
   | **Output Directory** | `dist` |
   | **Install Command** | `npm install` |

6. **Click "Deploy"** — Vercel will build and deploy your site. You'll get a live URL like `https://agency-ai-xxxx.vercel.app`.

7. **(Optional) Add a custom domain** — Go to **Settings → Domains** and add your domain.

---

### Option 2: Deploy via Vercel CLI

1. **Install the Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy from the project root**

   ```bash
   vercel
   ```

   Follow the prompts:
   - **Set up and deploy?** → `Y`
   - **Which scope?** → Select your account
   - **Link to existing project?** → `N` (for first deploy)
   - **Project name?** → `agency-ai` (or your preferred name)
   - **Directory?** → `./`
   - **Override settings?** → `N` (Vercel auto-detects Vite)

4. **Deploy to production**

   ```bash
   vercel --prod
   ```

---

### Fix: Favicon Path for Vercel

> [!IMPORTANT]
> The current `index.html` references the favicon as `/public/favicon.ico`. On Vercel (and Vite builds in general), files in the `public/` folder are served from the root. Update the path to `/favicon.ico`:

```html
<!-- Before -->
<link rel="icon" type="image/svg+xml" href="/public/favicon.ico" />

<!-- After -->
<link rel="icon" type="image/svg+xml" href="/favicon.ico" />
```

---

## ⚙️ Environment Notes

- **Contact Form**: The contact form uses [Web3Forms](https://web3forms.com/) with a hardcoded access key. For production, consider moving the key to an environment variable:

  1. Create a `.env` file in the project root:
     ```
     VITE_WEB3FORMS_KEY=your_access_key_here
     ```
  2. Reference it in `ContactUs.jsx`:
     ```js
     formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY)
     ```
  3. Add the environment variable in **Vercel Dashboard → Settings → Environment Variables**.

---

## 🎨 Customization

- **Theme Colors**: Edit `--color-primary` in [`src/index.css`](src/index.css) to change the brand color.
- **Fonts**: The project uses [Manrope](https://fonts.google.com/specimen/Manrope) from Google Fonts.
- **Animations**: Animation configs are inline in each component using Motion's `initial`, `whileInView`, and `transition` props.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/Raushan1504">Raushan</a>
</p>

