// bring in model
const Accounts = require('./accounts-model')

exports.checkAccountPayload = async (req, res, next) => {
  // DO YOUR MAGIC
  const { name, budget } = req.body

  if(!name || !budget){
    return res.status(400).json({message: "name and budget are required"})
  }
  if(name !== ""){
    return res.status(400).json({message: "name of account must be a string"})
  }

  
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const { name } = req.body.name

  try{
    if(name === name){
      res.status(400).json({ message: "that name is taken"})
    }
    else{
      next()
    }
  }
  catch{
    res.status(500).json({ message: "error checking for unique name"})
  }

}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params
  try{
    const account  = await Accounts.getById(id)
    if(!account){
      res.status(404).json({ message: "account not found"})
    }
    else{
      req.account = account
      next()
    }
  }
  catch{
    res.status(500).json({ message: "error finding account id"})
  }

}
