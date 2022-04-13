// const router = require("express").Router();
// const SubCategory = require("../models/subCategory");
// const Category = require("../models/category")

// router.post("/createSubCat", async (req, res) => {
//     const {name, Category}  = req.body;
//     // console.log(name);
//     // console.log(Category);
//     // const subCat = await Category.findOne({ name, Category });
//     // console.log(subCat)
//     try {
//         // await cat.save();
//         await SubCategory.create({name, Category})
//         res.status(200).send({
//             message: 'SubCategory created successfully'
//         })
//     } catch (error) {
//         res.status(500).send(error); 
//     }
// });

// router.patch("/editSubCat/:id", async (req, res) => {
//     try {
//         await SubCategory.findByIdAndUpdate(req.params.id, req.body);
//         await SubCategory.save();
//         res.status(200).send({
//             message: 'SubCategory updated successfully'
//         });
//   } catch (error) {
//      res.status(500).send(error); 
//   }
// });

// router.delete("/deleteSubCat/:id", async (req, res) => {
//     try {
//       const cat = await SubCategory.findByIdAndDelete(req.params.id);
  
//       if (!cat) res.status(404).send("No Sub Category found");
//       res.status(200).send({
//         message: 'Sub Category deleted successfully'
//       });
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   });
  
//   router.get("/getSubCategories", async (req, res) => {
//     const cate = await SubCategory.find({});
//     try {
//         res.send(cate);
//     } catch (error) {
//         res.status(500).send(error);
//     }
//   });

//   module.exports = router;
  
    