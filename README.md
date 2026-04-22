# Scalapay QA Automation Assignment

## Overview
This project contains automated tests for:
- API testing (GET /v2/payments/{token})
- UI testing (Merchant Portal login + Account page validation)

---

## Tech Stack
- Node.js
- Playwright

---

## Setup Instructions

### 1. Install dependencies
Bash -> npm install

### 2. Install Playwright browsers
Bash -> npx playwright install

### 3. Environment Variables

This project uses environment variables to manage sensitive configuration.

1. Create a .env file in the root directory:
API_TOKEN=your_token_here, 
BASE_URL=https://integration.api.scalapay.com, 
UI_URL=https://partner.development.scalapay.com/login

2. Notes
- The .env file is not committed to version control
- A .env.example file is provided as a template
- All sensitive data is loaded using dotenv

### 4. Run all tests
Bash -> npx playwright test

### 5. Run UI tests only
Bash -> npx playwright test tests/ui

### 6. Run API tests only
Bash -> npx playwright test tests/api

**How to run in headed mode (optional)**
- npx playwright test --headed

**Notes**
- Tests use stable selectors (data-automation, IDs)
- API assertions validate both structure and business logic
- UI tests follow login -> navigation -> validation flow


## Bonus: Troubleshooting Approach

### 1. Investigating “Unknown Error”

If the UI returns a generic "unknown error", I would take the following steps:

- **Reproduce the issue**  
  Try to consistently reproduce the error in the same environment.

- **Check browser developer tools**
  - Network tab -> inspect failed API calls (status codes, response body)
  - Console -> look for JavaScript errors

- **Validate API responses**  
  Verify if backend services are returning errors or unexpected data.

- **Check logs**
  - Application logs (frontend/backend)
  - Monitoring tools (if available)

- **Test outside UI**
  Use tools like Postman to isolate whether the issue is UI or backend related.

- **Environment check**
  Confirm configuration, feature flags, or environment-specific issues.

---

### 2. After Identifying the Root Cause

Once the issue is identified, I would:

- **Document findings clearly**
  - Steps to reproduce
  - Root cause
  - Affected areas

- **Create or update a bug ticket**
  Include logs, screenshots, and API responses if relevant.

- **Communicate with the team**
  Share findings in stand-up or team channels (e.g., Slack), especially if it is a blocker.

- **Suggest next steps**
  - Fix validation
  - Add test coverage to prevent regression

- **Verify the fix**
  Retest manually and through automation after the issue is resolved.
