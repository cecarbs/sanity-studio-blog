## Getting Started

1. Create `.env.development` file in your root folder with the values of:

```javascript
SANITY_STUDIO_PROJECT_URL = YOUR_URL; // http://localhost:3000
SANITY_STUDIO_PREVIEW_SECRET = YOUR_SECRET; // unique string
```

2. Run the development server:

```bash
npm start
# or
yarn start
```

3. Define new schemas using the `schemas` folder and import new schemas into `schema.js` file

For more info:

-[Read "Getting started" in the Sanity docs](https://www.sanity.io/docs/getting-started)
