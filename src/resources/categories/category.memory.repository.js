const Category = require('./category.model');

let categories = [];

module.exports = {
  async getAll() {
    return [...categories];
  },

  async getById(id) {
    return categories.find(category => category.id === id);
  },

  async getByMenuId(menuId) {
    return categories.filter(category => category.menuId === menuId);
  },

  async create(categoryData) {
    const category = new Category(categoryData);
    categories.push(category);
    return category;
  },

  async update(id, updateData) {
    const index = categories.findIndex(category => category.id === id);
    if (index === -1) return null;
    
    categories[index] = { ...categories[index], ...updateData, id: categories[index].id };
    return categories[index];
  },

  async delete(id) {
    const index = categories.findIndex(category => category.id === id);
    if (index === -1) return false;
    
    categories.splice(index, 1);
    return true;
  },

  async clear() {
    categories = [];
  },
};