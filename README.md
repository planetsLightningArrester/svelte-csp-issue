# Svelte CSP issue

Node Express + Svelte to reproduce issue when `"require-trusted-types-for 'script'"` is set in CSP.

## Reproducing

```bash
git clone git@github.com:planetsLightningArrester/svelte-csp-issue.git
# Build Svelte to `svelte/dist`
cd svelte
npm ci
npm run build
# Run the server
cd ..
npm ci
npm run start
```

Open http://localhost:3000 in your browser (tested on Chrome). It should be blank. Check the dev tools (press `F12`) and one should see the messages below.

```log
index-BP59ppMc.js:5 This document requires 'TrustedHTML' assignment.
index-BP59ppMc.js:5
  Uncaught TypeError: Failed to set the 'innerHTML' property on 'Element': This document requires 'TrustedHTML' assignment.
    at Object.c (index-BP59ppMc.js:5:78293)
    at fe (index-BP59ppMc.js:1:6802)
    at new qf (index-BP59ppMc.js:5:80408)
    at index-BP59ppMc.js:5:80547
```
