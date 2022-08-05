import { Product } from './product';

export class CartItem {
	private _product: Product;
	private _quantity: number;

	constructor (product: Product, quantity: number = 1) {
		this._product = product;
		this._quantity = quantity;
	}

	public showCartItemInHTML(index : number) : string {
        return "";
	}

	public getSubtotal() : number {
		return 1;
	}

	public get quantity() : number {
		return this._quantity;
	}

	public set quantity(v : number) {
		this._quantity = v;
	}

	public get product() : Product {
		return this._product;
	}

	public set product(v : Product) {
		this._product = v;
	}
}