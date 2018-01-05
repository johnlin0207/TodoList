let express = require('express');
let app = express();
const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017';

/* GET home page. */
app.post('/', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    //res.send({status:true,data:123});

    let userData = req.body;
    //console.log(userData);
    //search database
    let selectData = function (weiboDB, callback) {
        //连接到表

        let collection = weiboDB.collection('user');
        //查询数据
        let whereStr = {"userName": userData.username, "passWord": userData.password};
        collection.find(whereStr).toArray(function (err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    };

    let findUser = new Promise(function (resolve, reject) {
        MongoClient.connect(DB_CONN_STR, function (err, database) {
            //console.log("连接成功！");
            const weiboDB = database.db('weibo');
            selectData(weiboDB, function (result) {
                database.close();
                //if login success
                if (result.length !== 0) {
                    resolve(result[0]);
                } else {
                    //未找到该用户
                    reject(`can\'t find user ${userData.username}`)
                }
            });
        });
    });

    findUser.then((result) => {
        //cookie失效后登陆重新设置cookie
        //res.cookie("userID", result._id, {maxAge: 1000 * 1000, signed: true, path: '/'});
        //res.sendFile(publicPath + '/main.html');
        res.send({status: 1,username:result.userName,data:[]});
        //res.redirect('/main')
    }, (error) => {
        res.send({status: 0, msg: userData.username})
    })


});

module.exports = app;
