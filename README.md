# Getting Started

1. Create `.env.development` file in your root folder with the values of:

```javascript
<<<<<<< HEAD
SANITY_STUDIO_PROJECT_URL = YOUR_URL; // http://localhost:3000
SANITY_STUDIO_PREVIEW_SECRET = YOUR_SECRET; // unique string
```

=======
SANITY_STUDIO_PROJECT_URL=YOUR_URL // http://localhost:3000
SANITY_STUDIO_PREVIEW_SECRET=YOUR_SECRET // unique string
```
>>>>>>> ee989263dc5e997a080dfaf62a674e7e8320ff19
2. Run the development server:

```bash
npm start
# or
yarn start
```

3. Define new schemas using the `schemas` folder and import new schemas into `schema.js` file
