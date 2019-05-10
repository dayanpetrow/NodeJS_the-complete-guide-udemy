const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const rootDir = require('./utils/path');

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes); //adds /admin to all adminRoutes
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
