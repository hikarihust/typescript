import { ProductRepository } from './product-repository';
import { Product } from './product';

let productRepository = new ProductRepository();
let products : Product[] =  productRepository.getItems();

console.log(productRepository.showItemsInHTML());
