const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https')
    res.redirect(`https://${req.header('host')}${req.url}`)
  else
    next()
});


// Serve the static files from the dist directory (result of the Vite build)
app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

console.log('Server started on port ' + port);
