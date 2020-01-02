const router = require('express').Router();

router.use('/grooms', require('./grooms'));
router.use('/styles', require('./styles'));

//404
router.use(function(req, res, next) {
  const err = new Error('Not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
