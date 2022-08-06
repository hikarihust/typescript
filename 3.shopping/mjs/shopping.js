define(["require", "exports", "./product-repository"], function (require, exports, product_repository_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MElement;
    (function (MElement) {
        MElement.ELM_LIST_PRODUCT = "#list-product";
    })(MElement || (MElement = {}));
    let productRepository = new product_repository_1.ProductRepository();
    let products = productRepository.getItems();
    // Hiển thị danh sách sản phẩm
    function showListProduct() {
        $(MElement.ELM_LIST_PRODUCT).html(productRepository.showItemsInHTML());
    }
    jQuery(function () {
        showListProduct();
    });
});
