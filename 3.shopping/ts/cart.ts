import { CartItem } from './cart-item';
import { Product } from './product';

export class Cart {
	private cartItems: CartItem[] = [];
	private totalQuantity: number = 0;
    private totalPrice: number = 0;
    
	public addProduct (product: Product, quantity: number = 1) : void {

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
		return "";
	}

	public showCartFooterInHTML () : string {
		return "";
	}
}
