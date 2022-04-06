const router = require("express").Router();
const Product = require("../models/product");

router.post("/createProduct", async (req, res) => {
    const {name, 
        description,
        price,
        Category,
        SubCategory,
        countInStock,
        brand,
        type,
        rating
     } = req.body; 
    try {
        // await prod.save();
        await Product.create({
            name, 
            description,
            price,
            Category,
            SubCategory,
            countInStock,
            brand,
            type,
            rating
        })
        res.status(200).send({
            message: 'Product created successfully'
        })
    } catch (error) {
        res.status(500).send(error); 
    }
});

router.patch("/editProduct/:id", async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body);
        await Product.save();
        res.status(200).send({
            message: 'Product updated successfully'
        });
  } catch (error) {
     res.status(500).send(error); 
  }
});

router.delete("/deleteProduct/:id", async (req, res) => {
    try {
      const prod = await Product.findByIdAndDelete(req.params.id);
  
      if (!prod) res.status(404).send("No Product found");
      res.status(200).send({
        message: 'Product deleted successfully'
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.get("/getProducts", async (req, res) => {
    const prod = await Product.find({});
    try {
        res.send(prod);
    } catch (error) {
        res.status(500).send(error);
    }
  });

  module.exports = router;
  
    