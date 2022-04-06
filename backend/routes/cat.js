const router = require("express").Router();
const Category = require("../models/category");

router.post("/createCategory", async (req, res) => {
    const cat = new Category(req.body); 
    try {
        await cat.save();
        res.status(200).send({
            message: 'Category created successfully'
        })
    } catch (error) {
        res.status(500).send(error); 
    }
});

router.patch("/editCategory/:id", async (req, res) => {
    try {
        await Category.findByIdAndUpdate(req.params.id, req.body);
        await Category.save();
        res.status(200).send({
            message: 'Category updated successfully'
        });
  } catch (error) {
     res.status(500).send(error); 
  }
});

router.delete("/deleteCategory/:id", async (req, res) => {
    try {
      const cat = await Category.findByIdAndDelete(req.params.id);
  
      if (!cat) res.status(404).send("No Category found");
      res.status(200).send({
        message: 'Category deleted successfully'
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.get("/getCategories", async (req, res) => {
    const cate = await Category.find({});
    try {
        res.send(cate);
    } catch (error) {
        res.status(500).send(error);
    }
  });

  module.exports = router;
  
    