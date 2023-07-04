const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.get('/:id', productController.getProduct);
router.delete('/:id', productController.deleteProduct);
module.exports = router;