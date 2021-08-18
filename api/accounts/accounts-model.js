// Bring in DB Config

const db = require('../../data/db-config')

const getAll = async () => {
  // DO YOUR MAGIC
  return db("budget")
}

const getById = async (id) => {
  // DO YOUR MAGIC
  return db("budget").where("id", id).first()
}

const create = async ({account}) => {
  // DO YOUR MAGIC
  const [id] = await db("budget").insert({account})
  return getById(id)

}

const updateById = async (id, {account}) => {
  // DO YOUR MAGIC
  await db('budget').where("id", id).updateById({account})
  return getById(id)
}

const deleteById = async(id) => {
  // DO YOUR MAGIC
  const deletedPost = await getById(id)

  await db('budget').where("id", id).delete()
  return deletedPost
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
