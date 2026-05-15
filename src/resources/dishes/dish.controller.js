const dishService = require('./dish.service');
const { validateDishCreate, validateDishUpdate } = require('./dish.validation');

module.exports = {
  async getAllDishes(req, res) {
    try {
      const dishes = await dishService.getAllDishes();
      res.status(200).json(dishes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getDishById(req, res) {
    try {
      const { dishId } = req.params;
      const dish = await dishService.getDishById(dishId);
      
      if (!dish) {
        return res.status(404).json({ error: 'Dish not found' });
      }
      
      res.status(200).json(dish);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createDish(req, res) {
    try {
      const { categoryId } = req.query;
      const dishData = { ...req.body };
      
      // If categoryId is provided as query parameter, use it
      if (categoryId) {
        dishData.categoryId = categoryId;
      }
      
      const { error } = validateDishCreate(dishData);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      
      const dish = await dishService.createDish(dishData);
      res.status(201).json(dish);
    } catch (error) {
      if (error.message === 'Category not found') {
        return res.status(404).json({ error: error.message });
      }
      res.status(500).json({ error: error.message });
    }
  },

  async updateDish(req, res) {
    try {
      const { dishId } = req.params;
      const { error } = validateDishUpdate(req.body);
      
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      
      const updatedDish = await dishService.updateDish(dishId, req.body);
      
      if (!updatedDish) {
        return res.status(404).json({ error: 'Dish not found' });
      }
      
      res.status(200).json(updatedDish);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteDish(req, res) {
    try {
      const { dishId } = req.params;
      const deleted = await dishService.deleteDish(dishId);
      
      if (!deleted) {
        return res.status(404).json({ error: 'Dish not found' });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};