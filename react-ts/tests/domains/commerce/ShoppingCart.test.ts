import ShoppingCart from '@domains/commerce/ShoppingCart';
import { describe } from '@jest/globals';
import { mock } from 'jest-mock-extended';
import { CartService } from '@services/CartService';
import Product from '@dtos/Product';
import LineItem from '@dtos/LineItem';

describe('ShoppingCart', () => {
    const cartService = mock<CartService>();
    const product = new Product({id: 3, name: 'Fancy Soap', price: 29.99 });
    const lineItem = new LineItem({ product: product, quantity: 3});

    describe('#add', () => {
        it('should create a new entry if it is not yet in the cart', () => {
            const cart = new ShoppingCart({}, cartService);
            cart.add(product, 3);
            expect(cartService.addCartItem).toHaveBeenCalledWith(lineItem);
        });

        it('should update the existing entry if is present', () => {
            const cart = new ShoppingCart({ 3: lineItem }, cartService);
            cart.add(product, 5);
            const newLineItem = new LineItem({ product: product, quantity: 5 });
            expect(cartService.updateLineItem).toHaveBeenCalledWith(newLineItem);
        });
    });
});
