const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const rootDir = require('./utils/path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views'); //no need to do this, it is default directory

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes); //adds /admin to all adminRoutes
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page not found'
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
