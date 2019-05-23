const db = require("../dbConfig");

module.exports = {
  find,
  findBy,
  findById,
  create,
  remove,
  update
};

async function find() {
    return db("tools");
  }

  
async function findById(id) {
  const tool = await db("tools")
    .select({
      id: "id",
      user_id:"user_id",
      tool: "tool",
      price: "price",
      description: "description",
      image_url: "image_url"
    })
    .where({ id })
    .first();
  return tool;
}

  async function create(tool) {
    const [id] = await db("tools").insert(tool, "id");
  
    return getById(id);
  }
      
  function remove(id) {
    return db("tools")
      .where({ id })
      .del();
  }
      
      async function update(item, id) {
        const editedTool = await db("tools")
          .where({ id })
          .update(item);
        if (editedTool) {
          const tool = await findById(id);
          return tool;
        }
      }
  