const Joi = require('joi');

const menuCreateSchema = Joi.object({
  title: Joi.string().required().min(1).max(100),
  photo: Joi.string().uri().optional(),
  isPublish: Joi.boolean().optional(),
});

const menuUpdateSchema = Joi.object({
  title: Joi.string().min(1).max(100),
  photo: Joi.string().uri(),
  isPublish: Joi.boolean(),
});

module.exports = {
  validateMenuCreate: (data) => menuCreateSchema.validate(data),
  validateMenuUpdate: (data) => menuUpdateSchema.validate(data),
};