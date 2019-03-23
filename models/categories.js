const store = require('../db');
const getCategoryKey = ( id ) => `categories.${id}`;

module.exports = {
    getAll() {
      return Object.values(store.get('categories'));
    },
    getById(id) {
      return store.get(`categories.${id}`);
    },
    add(category) {
      let categories = store.get('products');
      let sortedIds = Object.keys(categories).sort().reverse();
      let id = sortedIds[0] || 0;
      category.id = Number(id) + 1;
      const keyName = getCategoryKey(category.id);
      store.set(keyName, category);
      return category;
    },
    delete(id, returnOriginal){
      let category = returnOriginal && this.getById(id);
      const keyName = getCategoryKey(id);
      store.del(keyName);
      return category;
    },
    patch(id, categoryUpdate) {
      const category = this.getById(id);
      Object.assign(category, categoryUpdate);
      const key = getCategoryKey(id);
      return store.set(key, category);
    }
  }
