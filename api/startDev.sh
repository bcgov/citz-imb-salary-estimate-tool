#!/bin/sh
pwd
# Run migrations
npx prisma db push --schema='prisma/schema.prisma' --skip-generate
# Seed data
# TODO Make a check to see if data already exists
# npx prisma db seed
# Start the application
npm run dev
