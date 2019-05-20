const db = require("../dbConfig");

module.exports = {
  find,
  findBy,
  findById,
  create,
  remove,
  update
};

function find() {
    return db("rented-tools");
  }

  function findBy(filter) {
    return db("rented-tools")
      .where(filter)
      .first();
  }

  function findById(id) {
    return db("rented-tools").where({ id });
  }

  async function create(rentedTool) {
    const [id] = await db("rented-tools").insert(rentedTool, "id");
    return getById(id);
  }

  function remove(id) {
    return db("rented-tools")
      .where({ id })
      .del();
  }

  function update(id, rentedTool) {
    return db("rented-tools")
      .where({ id })
      .update(rentedTool, "*");
  }