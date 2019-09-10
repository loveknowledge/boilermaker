const router = require('express').Router();

//these routes below will be for /users, /puppies, etc...then create a route file for each
// router.use('/examplepath', require('./examplepath'));
// router.use('/examplepath', require('./examplepath'));
router.get('/', async (req, res, next) => {
  try {
    // const data = await axios.get('/api')
    // return data
  } catch (error) {
    next(error);
  }
});

router.use(function(req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
