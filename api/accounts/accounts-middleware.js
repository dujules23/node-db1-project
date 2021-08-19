// bring in model
const Accounts = require('./accounts-model')

exports.checkAccountPayload = async (req, res, next) => {
  // DO YOUR MAGIC
  const { name, budget } = req.body

  if(!name || !budget){
    return res.status(400).json({message: "name and budget are required"})
  }
  // if(name !== ""){
  //   return res.status(400).json({message: "name of account must be a string"})
  // }
  const nameChar = name.length
  if (nameChar < 3 || nameChar > 100){
    return res.status(400).json({ message: "name of account must be between 3 and 100"})
  }
  if(budget.isNan()){
    return res.status(400).json({message: "budget of account must be a number"})
  }
  const oneMillion = 1e6
  const negativeNum = -1
  const negative = Math.sign(negativeNum)
  if(budget > oneMillion || budget == negative ){
    return res.status(400).json({message: "budget of account is too large or too small"})
  }
  else{
    next()
  }
  
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const { name } = req.body

  try{
    if(!name){
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
