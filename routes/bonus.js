var express = require('express');
const { param } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let params = req.query['inp'];
  let num;
  if(!params) {
    num = Math.random();
  } else {
    num = parseInt(params);
  }
  console.log(num)
  const f1 = Math.abs(num)
  const f2 = Math.acos(num)
  const f3 = Math.sin(num)
  const f4 = Math.sinh(num)
  res.render('bonus', { title: 'Sumant Chaganti', val: num,  f1, f2, f3, f4});

});

module.exports = router;
