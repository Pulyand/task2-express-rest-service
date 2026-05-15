const Menu = require('./menu.model');

let menus = [];

module.exports = {
  async getAll() {
    return [...menus];
  },

  async getById(id) {
    return menus.find(menu => menu.id === id);
  },

  async create(menuData) {
    const menu = new Menu(menuData);
    menus.push(menu);
    return menu;
  },

  async update(id, updateData) {
    const index = menus.findIndex(menu => menu.id === id);
    if (index === -1) return null;
    
    menus[index] = { ...menus[index], ...updateData, id: menus[index].id };
    return menus[index];
  },

  async delete(id) {
    const index = menus.findIndex(menu => menu.id === id);
    if (index === -1) return false;
    
    menus.splice(index, 1);
    return true;
  },
};