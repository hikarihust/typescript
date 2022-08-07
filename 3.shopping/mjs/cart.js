define(["require", "exports", "./cart-item"], function (require, exports, cart_item_1) {
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
            let position = this.getProductPosition(product);
            if (position > -1) {
                this.cartItems[position].quantity += quantity;
            }
            else {
                this.cartItems[this.cartItems.length] = new cart_item_1.CartItem(product, quantity);
            }
        }
        getProductPosition(product) {
            let total = this.cartItems.length;
            for (let i = 0; i < total; i++) {
                if (this.cartItems[i].product.id == product.id)
                    return i;
            }
            return -1;
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
            let xhtmlResult = ``;
            if (!this.isEmpty()) {
                let total = this.cartItems.length;
                for (let i = 0; i < total; i++) {
                    let cartItemCurrent = this.cartItems[i];
                    xhtmlResult += cartItemCurrent.showCartItemInHTML(i + 1);
                }
            }
            return xhtmlResult;
        }
        showCartFooterInHTML() {
            return "";
        }
    }
    exports.Cart = Cart;
});
