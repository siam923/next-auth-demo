## Getting Started

First, run the development server:

```bash
npm run dev

```

### Authjs

Since Prisma doesn't support edge runtime (e.g. fetch), so we need to create a seperate auth.config file and use the auth config with the middleware instead of using the auth.js file

Note: Client side signin is imported from `next-auth/react` and credential based server side sign in is imported from local `auth.js` file.

If someone signins using oauth e.g. google we need to automatically set email varified to true. For that we can use events from next auth. LinkAccount is a type of event that we used in code.
