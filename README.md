# ReviewMate — Product Comparison Dashboard

A modern, responsive React application for discovering, filtering, and comparing CRM software.

## Tech Stack
- **Frontend:** React, TypeScript, Vite, Tailwind CSS (v4)
- **Routing:** React Router DOM (URL-persisted state)
- **Testing:** Vitest, React Testing Library, Playwright

## Features
- **Product Directory:** Browse a searchable, filterable list of CRM products.
- **Product Details:** View individual product specifications.
- **Side-by-Side Comparison:** Select multiple products to compare their attributes (text, numbers, booleans, and arrays) in a responsive table.
- **URL-Persisted State:** The selected products are stored in the URL (e.g., `?compare=salesforce,hubspot`), making comparisons instantly shareable.
- **Accessible & Responsive:** Keyboard-navigable controls and a responsive table design.
- **Automated Tests:** Unit tests for the comparison logic and E2E tests for the user flow.

## Setup & Running

1. **Install dependencies:**
   ```bash
   npm install