
### Frontend
```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── CardList.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── RequestForm.jsx
│   │   └── SearchBar.jsx
│   ├── hooks/
│   │   └── useCards.js
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.css
│   └── main.js
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

The frontend is built with React and uses Vite as the build tool. It includes components, custom hooks, and services for API communication.

## Available Scripts

In the frontend directory:
- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run lint`: Runs ESLint
- `npm run preview`: Previews the build locally