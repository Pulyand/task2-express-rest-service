const { v4: uuidv4 } = require('uuid');

class Category {
  constructor({ menuId, title, photo, isVisible }) {
    this.id = uuidv4();
    this.menuId = menuId;
    this.title = title;
    this.photo = photo || '';
    this.isVisible = isVisible !== undefined ? isVisible : true;
  }

  static fromDatabase(data) {
    const category = new Category(data);
    category.id = data.id;
    return category;
  }
}

module.exports = Category;