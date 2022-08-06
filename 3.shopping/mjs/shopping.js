define(["require", "exports", "./product-repository"], function (require, exports, product_repository_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let productRepository = new product_repository_1.ProductRepository();
    let products = productRepository.getItems();
});
