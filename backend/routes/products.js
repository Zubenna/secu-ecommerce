const router = require('express').Router();
const Product = require('../models/Product');
const { verifyTokenAndAdmin } = require('../middleware/checkAuth');

router.post('/createProduct', verifyTokenAndAdmin, async (req, res) => {
  const {
    name,
    description,
    price,
    category,
    subCategory,
    countInStock,
    brand,
    type,
    rating,
  } = req.body;
  try {
    await Product.create({
      name,
      description,
      price,
      category,
      subCategory,
      countInStock,
      brand,
      type,
      rating,
    });
    res.status(200).send({
      message: 'Product created successfully',
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/editProduct/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send({
      message: 'Product updated successfully',
    });
  } catch (error) {
    res.status(500).send('Error updating product');
  }
});

router.delete('/deleteProduct/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const prod = await Product.findByIdAndDelete(req.params.id);
    // const prod = await Product.deleteMany({});

    if (!prod) res.status(404).send('No Product found');
    res.status(200).send({
      message: 'Product deleted successfully',
    });
  } catch (error) {
    res.status(500).send('Error deleting product');
  }
});

router.get('/getProducts', async (req, res) => {
  const prod = await Product.find({});
  try {
    res.send(prod);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/getProducts/catquery', async (req, res) => {
  try {
    const cat = req.query;
    const deCat = Object.entries(cat);
    const valOne = deCat[0][1];
    const prod = await Product.find({ category: valOne });
    res.send(prod);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/getProducts/subcatquery', async (req, res) => {
  try {
    const subCat = req.query;
    const deSubCat = Object.entries(subCat);
    const valOne = deSubCat[0][1];
    if (valOne === 'Camera Systems') {
      const prod = await Product.find({ category: valOne });
      res.send(prod);
    } else {
      const prod = await Product.find({ subCategory: valOne });
      res.send(prod);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
