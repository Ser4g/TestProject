# TestProject

# Install

For run tests it is necessary to install Node.JS (https://nodejs.org/en/download)

After install Node.JS execute next command:

- `npm i`
- `npx playwright install`

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

After tests completed you can find html report in the folder - .\playwright-report 

Also you can run report using next command:

- `npx playwright show-report`
