const express = require('express');
const router = express.Router();
const dishController = require('./dish.controller');

router.get('/', dishController.getAllDishes);
router.get('/:dishId', dishController.getDishById);
router.post('/', dishController.createDish);
router.put('/:dishId', dishController.updateDish);
router.delete('/:dishId', dishController.deleteDish);

module.exports = router;