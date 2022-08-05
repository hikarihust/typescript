define(["require", "exports", "./product"], function (require, exports, product_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProductRepository = void 0;
    class ProductRepository {
        constructor() {
            this.products = [];
        }
        addItem(product) {
        }
        getItems() {
            return [];
        }
        getItemByID(id) {
            return new product_1.Product(100, "bulbasaur", "bulbasaur.png", "Lorem", 69);
        }
        showItemsInHTML() {
            return "";
        }
    }
    exports.ProductRepository = ProductRepository;
});
