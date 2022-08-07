import { CartItem } from './cart-item';
import { Product } from './product';

export class Cart {
	private cartItems: CartItem[] = [];
	private totalQuantity: number = 0;
    private totalPrice: number = 0;
    
	public addProduct (product: Product, quantity: number = 1) : void {
		let position : number = this.getProductPosition (product);
		if(position > -1) {
			this.cartItems[position].quantity += quantity;
		}else {
			this.cartItems[this.cartItems.length] = new CartItem(product, quantity);
		}
	}

	private getProductPosition (product : Product) : number {
		let total : number = this.cartItems.length;
		for(let i : number = 0; i < total; i++){
			if(this.cartItems[i].product.id == product.id) return i;
		}
		return -1;
	}

	public updateProduct (product: Product, quantity: number = 1) :void {

	}

	public removeProduct (product: Product) : void {

	}

	public isEmpty () : boolean {
		return (this.cartItems.length == 0);
	}

	public getTotalQuantity () : number {
		return 1;
	}

	public getTotalPrice () : number {
		return 1;
	}
	
	public showCartBodyInHTML () : string {
		let xhtmlResult : string = ``;
		if(!this.isEmpty()) {
			let total : number = this.cartItems.length;
			for(let i : number = 0; i < total; i++){
				let cartItemCurrent : CartItem = this.cartItems[i];
				xhtmlResult += cartItemCurrent.showCartItemInHTML(i + 1);
			}	
		}
		return xhtmlResult;
	}

	public showCartFooterInHTML () : string {
		return "";
	}
}
