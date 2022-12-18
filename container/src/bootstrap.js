console.log('%c-> developmentConsole: Container | boostrap.js ', 'color:#77dcfd');

import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

const elProducts = document.querySelector('#dev-host-products');
mountProducts(elProducts);

const elCart = document.querySelector('#dev-host-cart');
mountCart(elCart);
