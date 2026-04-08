# nopCommerce Playwright Smoke Suite

Small Playwright portfolio project covering a stable smoke flow against the public nopCommerce demo store.

Current scope:
- Home page load and branding check
- Product search flow

Tech stack:
- Playwright Test
- TypeScript config
- Cross-browser execution in Chromium, Firefox, and WebKit

## Run Locally

Install dependencies:

```bash
npm ci
```

Run the full suite:

```bash
npm test
```

Run only the nopCommerce smoke suite:

```bash
npm run test:smoke
```

Run the smoke suite in headed mode:

```bash
npm run test:headed
```

Open the latest HTML report:

```bash
npm run report
```

## Notes

- Tests run against `https://demo.nopcommerce.com`
- CI execution is configured in `.github/workflows/playwright.yml`
- This project intentionally stays small and focused rather than covering unstable end-to-end purchase flows

## AI-Assited Workflow
This project was built with hands-on Playwright test design and debugging. Codex CLI was used to review the repository, suggest cleanup improvements, and refine documentation and project structure while keeping the working smoke suite intact.
