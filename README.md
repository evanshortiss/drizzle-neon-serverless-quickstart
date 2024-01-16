# Neon Serverless Driver & Drizzle Quickstart

Requires Node.js v18.

## Usage

```bash
git clone git@github.com:evanshortiss/drizzle-neon-serverless-quickstart.git drizzle-and-neon
cd drizzle-and-neon

# Add your DATABASE_URL
cp .env.example .env
vi .env

# Install dependencies, use drizzle to generate shemas and push them to the
# database, then seed data into your database using the included script
npm i
npm run drizzle:generate
npm run drizzle:push
npm run seed

# Start the application in dev mode and query the database
npm run dev
```
