## Migrations

Migrations run every time before the app starts. You can also run them manually as shown here:

Start by entering into the API container:

```bash
# get inside the api workspace. Run from root directory.
$ npm run shell:backend
```

Then run or revert a migration:

```bash
# run a migration after validating the generated file to make changes to the Database
$ npm run migration:run

# revert an erroneous migration
$ npm run migration:revert
```

---

### Generate a migration after you have changed an Entity

Start by entering into the API container:

```bash
# get inside the api workspace. Run from root directory.
$ npm run shell:backend
```

Then generate the migration:

```bash
# generate a migration once entity changes are done
$ npm run migration:generate src/migrations/<your-migration-name>
```

Now check migration in `src/migrations/` and modify if needed.

---

### Create an empty migration

Start by entering into the API container:

```bash
# get inside the api workspace. Run from root directory.
$ npm run shell:backend
```

Then create the migration:

```bash
# create an empty migration
$ npm run migration:create src/migrations/<your-migration-name>
```

Now edit the empty migration in `src/migrations/`.

---
