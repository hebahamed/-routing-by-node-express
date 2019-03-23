const express = require('express');
const router = express.Router();
const categories = require('../models/categories');
const Products = require('../models/products');


router.get('/', (req,res,next) => {
  let categoriesData = categories.getAll();
  res.send(categoriesData);
});

router.post('/', (req,res,next)=> {
  let addedCategory = categories.add(req.body);
  res.send(addedCategory);
});

router.get('/:categoryId', (req,res,next) => {
  let category = categories.getById(req.params.categoryId);
  res.send(category);
});


router.get('/:categoryId/products', (req,res,next) => {
    let products = Products.getAll();
    let categoryData = categories.getById(req.params.categoryId);
    // let productsArr =[];
    // products.map(product=>{
    //     if(categoryData.id === product.category)
    //     {   productsArr.push(product)
    //     }
    //     return productsArr;
    // })

    // res.send(productsArr);
// or
let productsRelatedCategory = products.filter(product=>categoryData.id===product.category);
res.send(productsRelatedCategory)
});


router.delete('/:categoryId', (req,res,next) => {
  let toBeDeleted = categories.delete(req.params.categoryId, true);
  res.send(toBeDeleted);
});


router.patch('/:categoryId', (req,res,next) => {
  let updatedCategory = categories.patch(req.params.categoryId, req.body);
  res.send(updatedCategory);
});



module.exports = router;
