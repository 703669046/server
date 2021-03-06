const expresss = require('express');
const bodyParsers = require('body-parser');
const cookieParsers = require('cookie-parser');
const app = expresss();

app.use(bodyParsers.urlencoded({ extended: true }));

app.use(cookieParsers());

//the cores config
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
        /make the require of options turn back quickly/
    } else {
        next();
    }
});
app.listen(6652, () => {
    console.log("正在监听6652端口");
});