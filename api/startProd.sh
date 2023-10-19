#!/bin/sh
pwd \
# Run migrations
npx prisma db push --schema='prisma/schema.prisma' --skip-generate \
# Seed data
npx prisma db seed \
# Start the application in production mode
npm run prod
