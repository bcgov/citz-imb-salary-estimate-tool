#!/bin/sh
pwd
# Run migrations
npx prisma db push --schema='prisma/schema.prisma' --skip-generate
# Seed data
npx prisma db seed
# Start the application
npm run dev
