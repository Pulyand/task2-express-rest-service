const { v4: uuidv4 } = require('uuid');

class Menu {
  constructor({ title, photo, isPublish }) {
    this.id = uuidv4();
    this.title = title;
    this.photo = photo || '';
    this.isPublish = isPublish !== undefined ? isPublish : false;
  }
}

module.exports = Menu;