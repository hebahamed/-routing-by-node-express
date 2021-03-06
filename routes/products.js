const express = require('express');
const router = express.Router();
const Products = require('../models/products');
const categories = require('../models/categories');


router.get('/', (req,res,next) => {
  let products = Products.getAll();
  res.send(products);
});

router.post('/', (req,res,next)=> {
  let addedProduct = Products.add(req.body);
  res.send(addedProduct);
});

router.get('/:productId', (req,res,next) => {
  let product = Products.getById(req.params.productId);
  res.send(product);
});

router.get('/:productId/category', (req,res,next) => {
  let product = Products.getById(req.params.productId);
  let categoryId = product.category;
  let category = categories.getById(categoryId);
  res.send(category.name);

});


router.delete('/:productId', (req,res,next) => {
  let toBeDeleted = Products.delete(req.params.productId, true);
  res.send(toBeDeleted);
});


router.patch('/:productId', (req,res,next) => {
  let updated = Products.patch(req.params.productId, req.body);
  res.send(updated);
});








module.exports = router;
