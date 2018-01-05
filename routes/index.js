let express = require('express');
let app = express();
let path = require('path');

/* GET home page. */
app.get('*', function (req, res, next) {
    //res.render('index', { title: 'Express' });

    //res.sendFile(path.resolve(__dirname,'../dist/index.html'));
});

app.post('/login', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    console.log(req.body);
    res.send(true);

});
module.exports = app;
