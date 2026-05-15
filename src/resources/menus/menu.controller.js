const menuService = require('./menu.service');

module.exports = {
  async getAllMenus(req, res) {
    try {
      const menus = await menuService.getAllMenus();
      res.status(200).json(menus);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getMenuById(req, res) {
    try {
      const { menuId } = req.params;
      const menu = await menuService.getMenuById(menuId);
      
      if (!menu) {
        return res.status(404).json({ error: 'Menu not found' });
      }
      
      res.status(200).json(menu);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createMenu(req, res) {
    try {
      const menu = await menuService.createMenu(req.body);
      res.status(201).json(menu);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateMenu(req, res) {
    try {
      const { menuId } = req.params;
      const updatedMenu = await menuService.updateMenu(menuId, req.body);
      
      if (!updatedMenu) {
        return res.status(404).json({ error: 'Menu not found' });
      }
      
      res.status(200).json(updatedMenu);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteMenu(req, res) {
    try {
      const { menuId } = req.params;
      const deleted = await menuService.deleteMenu(menuId);
      
      if (!deleted) {
        return res.status(404).json({ error: 'Menu not found' });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};