#!/bin/sh
pwd
# Run migrations
npx prisma db push --schema='dist/prisma/schema.prisma' --skip-generate
# Seed data
npx prisma db seed
# Start the application
npm run prod
