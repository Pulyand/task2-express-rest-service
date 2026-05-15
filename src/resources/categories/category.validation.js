const Joi = require('joi');

const categoryCreateSchema = Joi.object({
  menuId: Joi.string().required(),
  title: Joi.string().required().min(1).max(100),
  photo: Joi.string().uri().optional(),
  isVisible: Joi.boolean().optional(),
});

const categoryUpdateSchema = Joi.object({
  menuId: Joi.string(),
  title: Joi.string().min(1).max(100),
  photo: Joi.string().uri(),
  isVisible: Joi.boolean(),
});

module.exports = {
  validateCategoryCreate: (data) => categoryCreateSchema.validate(data),
  validateCategoryUpdate: (data) => categoryUpdateSchema.validate(data),
};