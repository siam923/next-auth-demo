## Getting Started

First, run the development server:

```bash
npm run dev

```

### Prisma

After making change in schema:

```bash
npx prisma generate
npx prisma db push
```

To run a builtin database studio by prisma:

```bash
npx prisma studio
```

For mongodb, there are some differences in the schema. Refer to docs for this. Example:

```
model Account {
  id                 String  @id @default(auto()) @map("_id") @db.ObjectId
  userId             String  @db.ObjectId
  refresh_token      String?  @db.String
  expires_at         Int?
  ....
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}
```

### Authjs

Since Prisma doesn't support edge runtime (e.g. fetch), so we need to create a seperate auth.config file and use the auth config with the middleware instead of using the auth.js file

Note: Client side signin is imported from `next-auth/react` and credential based server side sign in is imported from local `auth.js` file.

If someone signins using oauth e.g. google we need to automatically set email varified to true. For that we can use events from next auth. LinkAccount is a type of event that we used in code.
