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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node.js' });
});

/* GET home page. */
router.get('/two', function(req, res, next) {
  res.render('index2');
});

module.exports = router;
