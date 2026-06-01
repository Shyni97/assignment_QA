# Safora QA Automation (Playwright)

## Project Overview
This project automates the contact form testing for the Safora website using Playwright. It also includes manual test cases documented in an Excel sheet.

## Application Under Test
https://safora.se/en/contact.html

## Tools Used
- Playwright
- Node.js
- JavaScript
- Excel (Test Cases)

## Project Structure
Safora-Automation/
├── tests/
│ └── contact-form.spec.js
├── test-cases.xlsx
├── package.json
├── README.md

Test Coverage
--Contact form submission
--Basic field validation (as per Excel sheet)

## How to Run
Install dependencies:
```bash
npm install
npx playwright install

--Run tests:

npx playwright test

--View report:

npx playwright show-report