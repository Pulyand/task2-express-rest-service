const categoryRepository = require('./category.memory.repository');
const dishRepository = require('../dishes/dish.memory.repository');
const menuRepository = require('../menus/menu.memory.repository');

module.exports = {
  async getAllCategories() {
    return categoryRepository.getAll();
  },

  async getCategoryById(id) {
    return categoryRepository.getById(id);
  },

  async getDishesByCategoryId(categoryId) {
    const category = await categoryRepository.getById(categoryId);
    if (!category) return null;
    
    const allDishes = await dishRepository.getAll();
    return allDishes.filter(dish => dish.categoryId === categoryId);
  },

  async createCategory(categoryData) {
    // Verify that the menu exists
    const menu = await menuRepository.getById(categoryData.menuId);
    if (!menu) {
      throw new Error('Menu not found');
    }
    
    return categoryRepository.create(categoryData);
  },

  async updateCategory(id, updateData) {
    return categoryRepository.update(id, updateData);
  },

  async deleteCategory(id) {
    // Delete all dishes in this category
    const dishes = await this.getDishesByCategoryId(id);
    for (const dish of dishes) {
      await dishRepository.delete(dish.id);
    }
    
    // Delete the category
    return categoryRepository.delete(id);
  },
};