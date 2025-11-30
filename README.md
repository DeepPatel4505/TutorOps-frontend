# 🎓 TutorOps Frontend

This is the **React + Vite** frontend for the TutorOps platform — built for tutors, students, and parents to interact through a smart AI-assisted education system.

---

## 🚀 Features

- ⚛️ React + Vite for blazing-fast development
- 🎨 Tailwind CSS ready (optional)
- 📦 Module Aliases for clean imports
- 🔐 Auth Context included (recommended)
- 🧠 Scalable folder structure
- 🌍 Environment support with `.env`
- 🎯 Prettier + ESLint configured

---

## 📁 Folder Structure

```
frontend/
├── public/                         # Static files (favicon, etc.)
├── src/
│   ├── assets/                     # Images, fonts
│   ├── components/                # Reusable UI components
│   ├── context/                   # Global app state (AuthContext)
│   ├── hooks/                     # Custom React hooks
│   ├── layouts/                   # App Shell or Dashboard layout
│   ├── lib/                       # Axios instance or 3rd party wrappers
│   ├── pages/                     # Pages tied to routes
│   ├── routes/                    # Centralized route config
│   ├── services/                  # API calls (e.g., auth, assignment)
│   ├── utils/                     # Reusable functions
│   ├── App.jsx                    # Main component
│   └── main.jsx                   # React entry point
├── .env                           # Local environment variables
├── .env.example                   # Sample env file for devs
├── jsconfig.json                  # Supports path aliases in VS Code
├── vite.config.js                 # Vite + Alias config
├── .gitignore
├── .prettierrc                    # Prettier formatting rules
├── .eslintrc.cjs                  # ESLint rules
├── tailwind.config.js             # Tailwind settings (optional)
├── postcss.config.js              # Tailwind/PostCSS (optional)
├── index.html
├── package.json
└── README.md

````

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/tutorops.git
cd tutorops/frontend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` file

```bash
cp .env.example .env
```

Edit the file to add your backend URL:

```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Start the App

```bash
npm run dev
```

The app will run at `http://localhost:5173`

---

## 🚦 Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start dev server                 |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build locally |
| `npm run format`  | Format code using Prettier       |
| `npm run lint`    | Lint files using ESLint          |

---

## 🔌 Aliases (Path Mapping)

Use `@components`, `@pages`, `@services`, etc.

```js
import Button from '@components/ui/Button';
```

> Aliases are configured in `vite.config.js` and `jsconfig.json`.

---

## 🛠️ Tech Stack

* React 18+
* Vite
* Tailwind CSS (optional)
* Prettier + ESLint
* Axios
* React Router
* Context API



## 📦 Deploy Ready

This Vite setup can be deployed to:

* Vercel
* Netlify
* GitHub Pages
* Docker container (for monorepo)

---

## 🙌 Contributing

Pull requests are welcome!
Clone, create a branch, and submit a PR.

---

## 📧 Maintained By

Built with ❤️ by [**Deep**]("https://github.com/DeepPatel4505")



