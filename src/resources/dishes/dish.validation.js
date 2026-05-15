const Joi = require('joi');

const dishCreateSchema = Joi.object({
  categoryId: Joi.string().required(),
  title: Joi.string().required().min(1).max(100),
  description: Joi.string().max(500).optional(),
  photo: Joi.string().uri().optional(),
  isPublish: Joi.boolean().optional(),
  ingredients: Joi.array().items(Joi.string()).optional(),
  price: Joi.number().positive().required(),
});

const dishUpdateSchema = Joi.object({
  categoryId: Joi.string(),
  title: Joi.string().min(1).max(100),
  description: Joi.string().max(500),
  photo: Joi.string().uri(),
  isPublish: Joi.boolean(),
  ingredients: Joi.array().items(Joi.string()),
  price: Joi.number().positive(),
});

module.exports = {
  validateDishCreate: (data) => dishCreateSchema.validate(data),
  validateDishUpdate: (data) => dishUpdateSchema.validate(data),
};