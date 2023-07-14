const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const port = 3000;

app.get('/tamu', (req, res) => {
  var db = new sqlite3.Database('guestbook.db', (err) => {
    if (err) {
    }
    db.all('SELECT nama, catatan FROM tamu ;' , (err , data) => {
      if(err) return;
  
      // Success
      res.send(data);
    });
});
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});