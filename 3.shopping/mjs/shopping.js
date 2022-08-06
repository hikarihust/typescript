define(["require", "exports", "./product-repository", "./libs/validate"], function (require, exports, product_repository_1, validate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let productRepository = new product_repository_1.ProductRepository();
    var MElement;
    (function (MElement) {
        MElement.ELM_LIST_PRODUCT = "#list-product";
        MElement.ELM_NOTIFICATION = "#mnotification";
        MElement.ELM_CART_BODY = "#my-cart-body";
        MElement.ELM_CART_FOOTER = "#my-cart-footer";
    })(MElement || (MElement = {}));
    var MNotification;
    (function (MNotification) {
        MNotification.NOTI_READY_TO_BUY = "Ready to buy product";
        MNotification.NOTI_GREATER_THAN_ONE = "Quantity must equal or greater than 1";
    })(MNotification || (MNotification = {}));
    // Hiển thị danh sách sản phẩm
    function showListProduct() {
        $(MElement.ELM_LIST_PRODUCT).html(productRepository.showItemsInHTML());
    }
    // Hiển thị thông báo
    function showNotification(str) {
        $(MElement.ELM_NOTIFICATION).html(str);
    }
    // Hiển thị giỏ hàng:
    function showCart() {
        $(MElement.ELM_CART_BODY).html("");
        $(MElement.ELM_CART_FOOTER).html("");
    }
    jQuery(function () {
        showListProduct();
        showCart();
        showNotification(MNotification.NOTI_READY_TO_BUY);
        // Buy Product
        $("a.price").on("click", function () {
            let id = $(this).data("product");
            let quantity = +$("input[name='quantity-product-" + id + "']").val();
            if (validate_1.Validate.checkQuantity(quantity)) {
            }
            else {
                showNotification(MNotification.NOTI_GREATER_THAN_ONE);
            }
        });
    });
});
