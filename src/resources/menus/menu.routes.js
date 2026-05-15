const express = require('express');
const router = express.Router();
const menuController = require('./menu.controller');

router.get('/', menuController.getAllMenus);
router.get('/:menuId', menuController.getMenuById);
router.post('/', menuController.createMenu);
router.put('/:menuId', menuController.updateMenu);
router.delete('/:menuId', menuController.deleteMenu);

module.exports = router;