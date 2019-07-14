var express = require('express');
var router = express.Router();


/* 接口路由 */
router.get('/api/one', function(req, res, next) {
  res.json({
    "state":200,
    "data":{
      "name":"梁恩源",
      "age":"26",
      "title":"好好学习,天天向上",
      "site":"www.baidu.com",
    }
  });
});
/* 接口路由2 */
router.get('/api/two', function(req, res, next) {
  console.log(req.query);
  res.json({
    "state":200,
    "data":req.query
  });
});
/* 接口路由3 */
router.get('/api/three', function(req, res, next) {
    console.log(req.query);
    res.json({
        "state":200,
        "data":req.query
    });
});
/* 接口路由4 */
router.get('/api/four', function(req, res, next) {
    console.log(req.query);
    setTimeout(function () {
        res.json({
            "state":200,
            "data":req.query
        });
    },1000)
});
/* 接口路由5 */
router.post('/api/five', function(req, res, next) {
    console.log(req.body);
    res.json({
        "state":200,
        "data":"你发起的是Post请求"
    });
});

    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Node.js' });
    });

    /* GET home page. */
    router.get('/two', function(req, res, next) {
  res.render('index2');
});
router.get('/three', function(req, res, next) {
    res.render('index3');
});
router.get('/four', function(req, res, next) {
    res.render('index4');
});
router.get('/five', function(req, res, next) {
    res.render('index5');
});
router.get('/six', function(req, res, next) {
    res.render('index6');
});
module.exports = router;
