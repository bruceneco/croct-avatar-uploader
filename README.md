<p align="center">
    <a href="https://croct.com">
      <img src="https://cdn.croct.io/brand/logo/repo-icon-green.svg" alt="Croct" height="80"/>
    </a>
    <br />
    <strong>Avatar Uploader</strong>
    <br />
    A React component to upload and crop avatars.
</p>

## Technologies
* Vite (React, TS/SWC)
* Playwright (E2E)

## Scripts
### Start project
```shell
# Setup
npm install
```
```shell
# Runner (Dev)
npm run dev
```
```shell
# Runner (Prod)
npm run build
npm run preview
```
Then access http://localhost:4173

### E2E tests
```shell
# Setup
npm install
npx playwright install
```
```shell
# Runner
npm run test:e2e
```
```shell
# Check results
npm run e2e-report
```
### Unit tests
```shell
# Setup
npm install
```
```shell
# Runner
npm test
```
```shell
# Coverage
npm run coverage
```
