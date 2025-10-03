# Frontend Deployment for shackles.online

This branch contains only the frontend code needed for deployment to AWS.

## Deployment Structure
```
frontend/
├── public/
├── src/
├── package.json
├── package-lock.json
├── index.html
└── vite.config.js
```

## AWS Amplify Configuration
Build command: `npm run build`
Base directory: `frontend`
Build output directory: `dist`

## Domain: shackles.online
- Primary: https://shackles.online
- WWW: https://www.shackles.online