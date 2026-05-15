const categoryService = require('./category.service');
const { validateCategoryCreate, validateCategoryUpdate } = require('./category.validation');

module.exports = {
  async getAllCategories(req, res) {
    try {
      const categories = await categoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getCategoryById(req, res) {
    try {
      const { categoryId } = req.params;
      const category = await categoryService.getCategoryById(categoryId);
      
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getDishesByCategoryId(req, res) {
    try {
      const { categoryId } = req.params;
      const category = await categoryService.getCategoryById(categoryId);
      
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      
      const dishes = await categoryService.getDishesByCategoryId(categoryId);
      res.status(200).json(dishes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createCategory(req, res) {
    try {
      const { menuId } = req.query;
      const categoryData = { ...req.body };
      
      // If menuId is provided as query parameter, use it
      if (menuId) {
        categoryData.menuId = menuId;
      }
      
      const { error } = validateCategoryCreate(categoryData);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      
      const category = await categoryService.createCategory(categoryData);
      res.status(201).json(category);
    } catch (error) {
      if (error.message === 'Menu not found') {
        return res.status(404).json({ error: error.message });
      }
      res.status(500).json({ error: error.message });
    }
  },

  async updateCategory(req, res) {
    try {
      const { categoryId } = req.params;
      const { error } = validateCategoryUpdate(req.body);
      
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      
      const updatedCategory = await categoryService.updateCategory(categoryId, req.body);
      
      if (!updatedCategory) {
        return res.status(404).json({ error: 'Category not found' });
      }
      
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteCategory(req, res) {
    try {
      const { categoryId } = req.params;
      const deleted = await categoryService.deleteCategory(categoryId);
      
      if (!deleted) {
        return res.status(404).json({ error: 'Category not found' });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};