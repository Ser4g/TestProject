# TestProject

# Install

For run tests it is necessary to install Node.JS (https://nodejs.org/en/download)

After install Node.JS copy this Project and execute next command from folder where project is located (this command install all dependencies) :

- `npm i`

# Environment variables

Variables such as URL and API_AUTH_TOKEN are necessary specify in file .env which should be located in project folder (This file is absent in the project for security reason)

This file should contain two variables:

```env
API_TOKEN=<Write your API_AUTH_TOKEN>
baseURL=<Write your full URL for example https://test.test>
```

# Run Tests

For run test you can use next command:

- `npx playwright test`

It's necessary run this command from folder where project is located. 

You can also run tests with the VS Code Extension (https://playwright.dev/docs/getting-started-vscode).

# Reporting

If some tests was failed report opens automatically.  

After tests completed you can find html report in the folder - .\playwright-report 

Also you can run last report using next command:

- `npx playwright show-report`

# Project Structure
```
project-root/
├── playwright.config.ts               # Playwright configuration
├── package.json
├── .env                               # Environment variables (store only locally not present in GitHub)
├── README.md                          # Main project documentation
├── tests/                             # Tests
├── pages/                             # Page Objects
    ├──base/
    └──components/
├── fixtures/                          # Playwright fixtures (https://playwright.dev/docs/test-fixtures)
└── settings/                          # Settings
```


