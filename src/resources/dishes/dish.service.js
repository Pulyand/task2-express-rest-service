const dishRepository = require('./dish.memory.repository');
const categoryRepository = require('../categories/category.memory.repository');

module.exports = {
  async getAllDishes() {
    return dishRepository.getAll();
  },

  async getDishById(id) {
    return dishRepository.getById(id);
  },

  async createDish(dishData) {
    // Verify that the category exists
    const category = await categoryRepository.getById(dishData.categoryId);
    if (!category) {
      throw new Error('Category not found');
    }
    
    return dishRepository.create(dishData);
  },

  async updateDish(id, updateData) {
    return dishRepository.update(id, updateData);
  },

  async deleteDish(id) {
    return dishRepository.delete(id);
  },
};