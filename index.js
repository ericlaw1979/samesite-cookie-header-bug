const express = require('express');
const app = express();
const port = process.argv[2] || 3000;
const otherdomainpage = process.argv[3] || 'https://google.com';

app.set('view engine', 'pug');

app.get('/', (req,res) => {
  // httpOnly: true not used for now
  res.cookie('john' + port, 'snow', { sameSite: 'strict' });
  res.cookie('tyrion' + port, 'lannister', { sameSite: 'lax' });
  res.cookie('daenerys' + port, 'targaryen');
  res.render('index', { title: 'index', message: port, otherdomainpage });
});

app.get('/about', (req,res) => {
  res.render('about', { title: 'about', message: port, otherdomainpage });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
