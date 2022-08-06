define(["require", "exports", "./product"], function (require, exports, product_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProductRepository = void 0;
    class ProductRepository {
        constructor() {
            this.products = [];
            this.addItem(new product_1.Product(100, "bulbasaur", "bulbasaur.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 69));
            this.addItem(new product_1.Product(101, "charmander", "charmander.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 18));
            this.addItem(new product_1.Product(102, "ivysaur", "ivysaur.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 22));
            this.addItem(new product_1.Product(103, "squirtle", "squirtle.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 65));
            this.addItem(new product_1.Product(104, "venusaur", "venusaur.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 19, false));
        }
        addItem(product) {
            this.products.push(product);
        }
        getItems() {
            return this.products;
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
