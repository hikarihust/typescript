import { Product } from "./product";

export class ProductRepository {
    private products: Product[] = [];

    constructor() {

    }

    public addItem(product: Product) {

    }

    public getItems() : Product[] {
        return [];
    }

    public getItemByID(id : number) : Product {
        return null;
    }

    public showItemsInHTML() : string {
        return "";
    }
}