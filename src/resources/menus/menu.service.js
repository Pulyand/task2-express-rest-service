const menuRepository = require('./menu.memory.repository');

module.exports = {
  async getAllMenus() {
    return menuRepository.getAll();
  },

  async getMenuById(id) {
    return menuRepository.getById(id);
  },

  async createMenu(menuData) {
    return menuRepository.create(menuData);
  },

  async updateMenu(id, updateData) {
    return menuRepository.update(id, updateData);
  },

  async deleteMenu(id) {
    return menuRepository.delete(id);
  },
};