# CITZ IMB — Salary Estimate Tool

[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)]()

To initilize the project, create a .env file in the root directory based on the .env.template file, then create a .env file in the api directory based on the .env.template file.  To get the required values for the .env files, contact the project team.

Then run the following commands in both the api and frontend directories:

```
npm install
```

To start the project in dev mode, run the following command in the root directory:

```
docker-compose -f docker-compose.dev.yaml up --build -d
```
To stop the project in dev mode, run the following command in the root directory:

```
docker-compose -f docker-compose.dev.yaml down
```
