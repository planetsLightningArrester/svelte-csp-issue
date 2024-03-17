const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();

// Middleware to set CSP headers
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'unsafe-inline'", "'self'", "https://cdn.jsdelivr.net", "https://fonts.googleapis.com"],
      fontSrc: ["'unsafe-inline'", "'self'", "https://cdn.jsdelivr.net", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:"],
      scriptSrc: ["'self'"],
      objectSrc: ["'none'"],
      // Comment/un-comment the line below the see the issue show
      requireTrustedTypesFor: ["'script'"]
    },
  })
);

// Serve static files from the "client" directory
app.use(express.static(path.join(__dirname, 'svelte', 'dist')));

// Route to serve HTML
app.get('/', (req, res) => {
  res.send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

