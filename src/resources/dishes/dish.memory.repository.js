const Dish = require('./dish.model');

let dishes = [];

module.exports = {
  async getAll() {
    return [...dishes];
  },

  async getById(id) {
    return dishes.find(dish => dish.id === id);
  },

  async getByCategoryId(categoryId) {
    return dishes.filter(dish => dish.categoryId === categoryId);
  },

  async create(dishData) {
    const dish = new Dish(dishData);
    dishes.push(dish);
    return dish;
  },

  async update(id, updateData) {
    const index = dishes.findIndex(dish => dish.id === id);
    if (index === -1) return null;
    
    dishes[index] = { ...dishes[index], ...updateData, id: dishes[index].id };
    return dishes[index];
  },

  async delete(id) {
    const index = dishes.findIndex(dish => dish.id === id);
    if (index === -1) return false;
    
    dishes.splice(index, 1);
    return true;
  },

  async clear() {
    dishes = [];
  },
};