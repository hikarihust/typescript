define(["require", "exports"], function (require, exports) {
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
            return null;
        }
        showItemsInHTML() {
            return "";
        }
    }
    exports.ProductRepository = ProductRepository;
});
