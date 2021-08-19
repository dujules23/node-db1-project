const router = require('express').Router()

// Bring in model 
const Accounts = require('./accounts-model')

// middleware functions
const { checkAccountId, checkAccountNameUnique} = require('./accounts-middleware')

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.getAll()
    .then(account => {
      res.status(200).json(account)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "error retrieving the account"
      })
    })
})

router.get('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  res.status(200).json(req.account)
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
