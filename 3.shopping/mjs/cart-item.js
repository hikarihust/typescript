define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CartItem = void 0;
    class CartItem {
        constructor(product, quantity = 1) {
            this._product = product;
            this._quantity = quantity;
        }
        showCartItemInHTML(index) {
            return "";
        }
        getSubtotal() {
            return 1;
        }
        get quantity() {
            return this._quantity;
        }
        set quantity(v) {
            this._quantity = v;
        }
        get product() {
            return this._product;
        }
        set product(v) {
            this._product = v;
        }
    }
    exports.CartItem = CartItem;
});
