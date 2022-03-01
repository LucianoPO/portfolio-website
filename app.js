const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('home');
})

app.listen(3000, function(){
  console.log('Port running on 3000');
})
