define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cart = void 0;
    class Cart {
        constructor() {
            this.cartItems = [];
            this.totalQuantity = 0;
            this.totalPrice = 0;
        }
        addProduct(product, quantity = 1) {
        }
        updateProduct(product, quantity = 1) {
        }
        removeProduct(product) {
        }
        isEmpty() {
            return (this.cartItems.length == 0);
        }
        getTotalQuantity() {
            return 1;
        }
        getTotalPrice() {
            return 1;
        }
        showCartBodyInHTML() {
            return "";
        }
        showCartFooterInHTML() {
            return "";
        }
    }
    exports.Cart = Cart;
});
