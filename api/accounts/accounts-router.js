const router = require('express').Router()

// Bring in model 
const Accounts = require('./accounts-model')

// middleware functions
const { checkAccountId, checkAccountNameUnique, checkAccountPayload} = require('./accounts-middleware')

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.getAll()
    .then(account => {
      res.status(200).json(account)
      next()
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
  next()
})

router.post('/', checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  const account = await Accounts.create(req.body)
  res.status(201).json(account)
  next()
})

router.put('/:id', checkAccountPayload, (req, res, next) => {
  // DO YOUR MAGIC
  res.status
});

router.delete('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  const deletedAccount = await Accounts.deleteById(req.params.id)
  res.status(200).json(deletedAccount)
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
