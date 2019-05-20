const router = require("express").Router();
const rentedTools = require("../data/helpers/rented-tools-model");
const Tools = require("../data/helpers/tools-model");


//middleware for toggling rent status
async function booleanToggle(req, res, next) {
  try {
    const id = req.body.tool_id ? req.body.tool_id : req.params.id;
    const tool = await Tools.findById(id);
    if (tool) {
      try {
        const boolUpdated = { ...tool, is_rented: !tool.is_rented };
        await Tools.update(boolUpdated.id, boolUpdated);

        next();
      } catch (error) {
        res
          .status(500)
          .json({ message: "Server error, was not rented" });
      }
    } else {
      res.status(404).json({ message: "Tool with specified ID does not exist" });
    }
  } catch (error) {
    res.send(error);
  }
}

//get all rented tools
router.get("/",  (req, res) => {
  rentedTools
    .find()
    .then(tools => {
      res.status(200).json(tools);
    })
    
    .catch(err => {
      res.status(500).json(err);
    });
});


//add a tool to rented list
router.post("/",  booleanToggle, async (req, res) => {
  if (!req.body.renter_id || !req.body.tool_id) {
    res.status(400).json({ error: "Must enter renter_id and tool_id" });
  } else {
    try {
      const tool = await rentedTools.create(req.body);
      res.status(201).json(tool);
    } catch (error) {
      res.status(500).json(error);
    }
  }
});


//delete a tool from rented list
router.delete("/:id",  booleanToggle, async (req, res) => {
  try {
    const tool_id = req.params.id;
    rentedTool = await rentedTools.findBy({ tool_id });
    
    
    try {
      const tool = await rentedTools.remove(rentedTool.id);
      
      if (tool > 0) {
        res.status(200).json({ message: "rented-tool successfully deleted" });
      } 
      
      else {
        res
          .status(404)
          .json({ message: "rented-tool with that ID could not be found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server error, something went wrong deleting rented tool" });
    }
  } catch (error) {
    res.status(500).status({ error });
  }
});

module.exports = router;