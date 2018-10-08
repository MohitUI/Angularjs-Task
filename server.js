var express = require('express');
var app = express();
app.use(express.static("app")); // myApp will be the same folder name.

app.get('/', function (req, res,next) {
 res.redirect('/'); 
});

app.route('/api/cats').get((req, res) => {
    res.send({
      cats: [{ name: 'lilly' }, { name: 'lucy' }]
    });
  });

app.listen(3000, 'localhost');
console.log("MyProject Server is Listening on port 3000");