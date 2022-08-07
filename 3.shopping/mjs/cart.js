define(["require", "exports", "./cart-item", "./libs/helpers"], function (require, exports, cart_item_1, helpers_1) {
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
            this.totalQuantity += quantity;
            this.totalPrice += product.price * quantity;
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
            let position = this.getProductPosition(product);
            if (position > -1) {
                this.totalQuantity = this.totalQuantity - this.cartItems[position].quantity + quantity;
                this.totalPrice = this.totalPrice - product.price * (this.cartItems[position].quantity - quantity);
                this.cartItems[position].quantity = quantity;
            }
        }
        removeProduct(product) {
        }
        isEmpty() {
            return (this.cartItems.length == 0);
        }
        /*
        public getTotalQuantity () : number {
            return 1;
        }
    
        public getTotalPrice () : number {
            return 1;
        }
        */
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
            let xhtmlResult = `<tr><th colspan="6">Empty product in your cart</th></tr>`;
            if (!this.isEmpty()) {
                xhtmlResult = `<tr>
								<td colspan="4">There are <b>${this.totalQuantity}</b> items in your shopping cart.</td>
								<td colspan="2" class="total-price text-left">${helpers_1.Helpers.toCurrency(this.totalPrice, "USD", "right")}</td>
							</tr>`;
            }
            return xhtmlResult;
        }
    }
    exports.Cart = Cart;
});
