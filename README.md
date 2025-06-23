# Playwright Automation Framework

A simple and professional Playwright + TypeScript automation framework for web testing, using the Page Object Model (POM).

## Project Structure

```
playwright-ts-framework/
├── src/
│   ├── pages/        # Page Objects
│   ├── tests/        # Test specs
│   └── utils/        # Utilities
├── package.json      # NPM scripts and dependencies
├── playwright.config.ts # Playwright config
├── tsconfig.json     # TypeScript config
└── README.md         # Documentation
```

## Getting Started

1. **Install dependencies:**

   ```
   npm install
   ```

2. **Run tests:**

   ```
   npm test
   ```

3. **View HTML report:**
   ```
   npm run test:report
   ```

## Features

- Clean Page Object Model structure
- TypeScript support
- Easy to extend and maintain
- Playwright HTML reporting

## Adding Tests

- Add new test files in `src/tests/`.
- Use or extend page objects in `src/pages/`.

## Code Quality

- Lint: `npm run lint`
- Format: `npm run format`
