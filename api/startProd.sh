#!/bin/sh
pwd \
npx prisma db push --schema='prisma/schema.prisma' --skip-generate \
npx prisma db seed \
npm run prod \
