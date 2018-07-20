const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', hbs);
app.use(express.static(__dirname + '/public'));

app.use('/about', (req, res) => {
    res.render('about.hbs');
});

app.listen(port, () =>{
    console.log(`running... on port ${port}`);
})