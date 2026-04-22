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
Bash
npm install

### 2. Install Playwright browsers
Bash
npx playwright install

### 3. Run all tests
Bash
npx playwright test

### 4. Run UI tests only
Bash
npx playwright test tests/ui

### 5. Run API tests only
Bash
npx playwright test tests/api

**Notes**
- Tests use stable selectors (data-automation, IDs)
- API assertions validate both structure and business logic
- UI tests follow login → navigation → validation flow
