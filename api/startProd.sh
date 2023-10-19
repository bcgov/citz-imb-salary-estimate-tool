#!/bin/sh

# Run migrations
npx prisma db push --schema='prisma/schema.prisma' --skip-generate

# Seed data (if needed)
npx prisma db seed

# Start the application in production mode
npm prod
