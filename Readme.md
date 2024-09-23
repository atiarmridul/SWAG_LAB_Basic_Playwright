# SWAG LAB flow demonstration with Playwright

## Website Under Test
https://www.saucedemo.com/v1/

## Features

- Login flow.
- Add to Cart flow.
- Verifying that correct products are added into the cart. 
- Checkout flow.
- Verifying the checkout is successfull.

## Run Locally

Clone the project

```bash {"id":"01J7TWY4RKEYT0E8W8P4QQK3KR"}
  git clone https://github.com/atiarmridul/SWAG_LAB_Basic_Playwright.git
```

Install dependencies

```bash {"id":"01J7TWY4RKEYT0E8W8P7Q1J3BH"}
  npm install
```

Start the test (headless)

```bash {"id":"01J7TWY4RKEYT0E8W8P99KNTTW"}
  npx playwright test
```

Start the test (headed)

```bash {"id":"01J7TWY4RKEYT0E8W8P99KNTTW"}
  npx playwright test --headed
```

Show Report 

```bash {"id":"01J7TX353VH5ZPK2XEH83HJW23"}
  npx playwright show-report 
```

## Tech Stack

- Playwright
- Node.js

## Tools Used

- VS Code.
- Git. / Github actions
- Node.js


## Appendix

