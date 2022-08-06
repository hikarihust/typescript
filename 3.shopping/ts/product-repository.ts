import { Product } from "./product";

export class ProductRepository {
    private products: Product[] = [];

    constructor() {
		this.addItem(new Product(100, "bulbasaur", "bulbasaur.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 69));
        this.addItem(new Product(101, "charmander", "charmander.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 18));
        this.addItem(new Product(102, "ivysaur", "ivysaur.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 22));
        this.addItem(new Product(103, "squirtle", "squirtle.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 65));
        this.addItem(new Product(104, "venusaur", "venusaur.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit.", 19, false));
    }

    public addItem(product: Product) {
        this.products.push(product);
    }

    public getItems() : Product[] {
        return this.products;
    }

    public getItemByID(id : number) : Product {
        return null;
    }

    public showItemsInHTML() : string {
        return "";
    }
}