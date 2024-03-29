define(["require", "exports", "./product-repository", "./libs/validate", "./cart"], function (require, exports, product_repository_1, validate_1, cart_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        MNotification.NOTI_ACT_ADD = "Added successfull !!";
        MNotification.NOTI_ACT_UPDATE = "Updated successfull !!";
        MNotification.NOTI_ACT_DELETE = "Deleted successfull !!";
    })(MNotification || (MNotification = {}));
    let productRepository = new product_repository_1.ProductRepository();
    let cartObj = new cart_1.Cart();
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
        $(MElement.ELM_CART_BODY).html(cartObj.showCartBodyInHTML());
        $(MElement.ELM_CART_FOOTER).html(cartObj.showCartFooterInHTML());
    }
    // Add Product
    function addProduct(id, quantity) {
        if (validate_1.Validate.checkQuantity(quantity)) {
            let product = productRepository.getItemByID(id);
            cartObj.addProduct(product, quantity);
            showCart();
            showNotification(MNotification.NOTI_ACT_ADD);
        }
        else {
            showNotification(MNotification.NOTI_GREATER_THAN_ONE);
        }
    }
    // Update Product
    function updateProduct(id, quantity) {
        if (validate_1.Validate.checkQuantity(quantity)) {
            let product = productRepository.getItemByID(id);
            cartObj.updateProduct(product, quantity);
            showCart();
            showNotification(MNotification.NOTI_ACT_UPDATE);
        }
        else {
            showNotification(MNotification.NOTI_GREATER_THAN_ONE);
        }
    }
    // Delete Product
    function deleteProduct(id) {
        let product = productRepository.getItemByID(id);
        cartObj.removeProduct(product);
        showCart();
        showNotification(MNotification.NOTI_ACT_DELETE);
    }
    jQuery(function () {
        showListProduct();
        showCart();
        showNotification(MNotification.NOTI_READY_TO_BUY);
        // Buy Product
        $("a.price").on("click", function () {
            let id = $(this).data("product");
            let quantity = +$("input[name='quantity-product-" + id + "']").val();
            addProduct(id, quantity);
            return false;
        });
        // Update Product
        $(document).on("click", "a.update-cart-item", function () {
            let id = $(this).data("product");
            let quantity = +$("input[name='cart-item-quantity-" + id + "']").val();
            updateProduct(id, quantity);
            return false;
        });
        // Delete Product
        $(document).on("click", "a.delete-cart-item", function () {
            let id = $(this).data("product");
            deleteProduct(id);
            return false;
        });
    });
});
