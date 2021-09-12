<<<<<<< HEAD
const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});
=======
const router =require('express').Router();

const apiRoutes = require('./api');

router.use('/api',apiRoutes);

router.use((req,res)=>{
  res.status(404).end();
})
>>>>>>> origin

module.exports = router;