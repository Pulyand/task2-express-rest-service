const { v4: uuidv4 } = require('uuid');

class Dish {
  constructor({ categoryId, title, description, photo, isPublish, ingredients, price }) {
    this.id = uuidv4();
    this.categoryId = categoryId;
    this.title = title;
    this.description = description || '';
    this.photo = photo || '';
    this.isPublish = isPublish !== undefined ? isPublish : false;
    this.ingredients = ingredients || [];
    this.price = price;
  }

  static fromDatabase(data) {
    const dish = new Dish(data);
    dish.id = data.id;
    return dish;
  }
}

module.exports = Dish;