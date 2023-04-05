# E2E and API Automation Testing Project with Cypress

This is a project for E2E and API automation testing using the Cypress framework. The project is capable of running automated end-to-end tests on a web application, as well as API tests using Cypress.

This project was developed during the [course](https://cursos.alura.com.br/course/cypress-automacao-testes-e2e) "Automação Web e Testes de API com Cypress" by Alura

## Prerequisites:
Before running the tests, you need to have the following tools installed on your machine:

 - NodeJS `v16.15.0`

# Installation
1. Navigate to the project folder and run the command `npm install` to install all dependencies.

## Running the tests
To run the tests, simply run the command npm run test at the root of the project. This will start Cypress and run all automated tests.

You can also run individual tests using the command npm run `test:filename.spec.js`.

# Project structure

├── cypress
│   ├── fixtures
│   ├── integration
│   │   ├── api
│   │   └── e2e
│   └── support
├── cypress.json
├── .env
├── package.json
└── README.md

- cypress: Main project folder containing Cypress configuration files and test folders.
 - fixtures: Folder for storing test data files.
 - integration: Folder for storing test files.
   - api: Folder for storing API test files.
   - e2e: Folder for storing E2E test files.
 - support: Folder for storing Cypress support files.
- cypress.json: Cypress configuration file.
- .env: Configuration file for defining environment variables.
- package.json: Project configuration file.
- README.md: File with project usage instructions.