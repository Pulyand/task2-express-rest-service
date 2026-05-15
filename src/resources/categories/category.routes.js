const express = require('express');
const router = express.Router();
const categoryController = require('./category.controller');

router.get('/', categoryController.getAllCategories);
router.get('/:categoryId', categoryController.getCategoryById);
router.get('/:categoryId/dishes', categoryController.getDishesByCategoryId);
router.post('/', categoryController.createCategory);
router.put('/:categoryId', categoryController.updateCategory);
router.delete('/:categoryId', categoryController.deleteCategory);

module.exports = router;