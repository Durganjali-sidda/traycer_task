# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
"# traycer_task" 
 


 # Login Page Project

A simple login page built with **React**, **Tailwind CSS**, and **Zustand** for state management. This project demonstrates a frontend login flow using dummy data or API integration.

---

## Features

- Responsive login form with **email** and **password** fields  
- **Zustand** store to manage authentication state  
- Protected routes for authenticated users  
- Dummy token storage in **localStorage** for frontend development  
- Easy to integrate with a backend API (Django, Node.js, etc.)

---

## Tech Stack

- **Frontend:** React + TypeScript + Tailwind CSS  
- **State Management:** Zustand  
- **Routing:** React Router v6  
- **Backend (optional):** Can integrate with JWT-based API

---

## Quick Demo Script

1. **Open the app** (e.g., `npm run dev` for Vite).  
2. **Navigate to Login Page**.  
3. **Enter dummy credentials** (or real API credentials if connected).  
4. Click **Login** → token and user info will be stored in `localStorage`.  
5. Redirect happens to the **dashboard/home page**.  
6. **Protected routes** will only allow access if logged in.  
7. Click **Logout** to clear the token and return to login page.  

> *Tip:* You can also modify the `authStore` to use real API calls or dummy data while developing.

---

## Installation

```bash
# Clone repository
git clone https://github.com/your-username/login-page.git
cd login-page

# Install dependencies
npm install

# Run development server
npm run dev
