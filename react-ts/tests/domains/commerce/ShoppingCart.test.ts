import ShoppingCart from '@domains/commerce/ShoppingCart';
import { describe } from '@jest/globals';
import { mock, mockClear } from 'jest-mock-extended';
import { CartService } from '@services/CartService';
import Product from '@dtos/Product';
import LineItem from '@dtos/LineItem';

describe('ShoppingCart', () => {
    const cartService = mock<CartService>();
    const product = new Product({id: 3, name: 'Fancy Soap', price: 29.99 });
    const lineItem = new LineItem({ product: product, quantity: 3});

    beforeEach(() => {
        mockClear(cartService);
    });

    describe('#setProductQuantity', () => {
        it('should create a new entry if it is not yet in the cart', () => {
            const cart = new ShoppingCart({}, cartService);
            cart.setProductQuantity(product, 3);
            expect(cartService.addCartItem).toHaveBeenCalledWith(lineItem);
        });

        it('should update the existing entry if is present', () => {
            const cart = new ShoppingCart({ 3: lineItem }, cartService);
            cart.setProductQuantity(product, 5);
            const newLineItem = new LineItem({ product: product, quantity: 5 });
            expect(cartService.updateLineItem).toHaveBeenCalledWith(newLineItem);
        });

        it('should delete the line item if quantity is 0', () => {
            const cart = new ShoppingCart({ 3: lineItem }, cartService);
            cart.setProductQuantity(product, 0);
            const newLineItem = new LineItem({ product: product, quantity: 0 });
            expect(cartService.deleteLineItem).toHaveBeenCalledWith(newLineItem);
        });

        it('should not insert invalid quantity line items', () => {
            const cart = new ShoppingCart({}, cartService);
            let result = cart.setProductQuantity(product, 0);
            expect(cartService.addCartItem).not.toHaveBeenCalled();
            expect(result).rejects.toEqual(new Error('Cannot add line item with invalid quantity'));

            result = cart.setProductQuantity(product, NaN)
            expect(cartService.addCartItem).not.toHaveBeenCalled();
            expect(result).rejects.toEqual(new Error('Cannot add line item with invalid quantity'));
        });

        it('should delete the item if quantity is NaN', () => {
            const cart = new ShoppingCart({ 3: lineItem }, cartService);
            cart.setProductQuantity(product, NaN);
            expect(cartService.deleteLineItem).toHaveBeenCalled();
        });
    });
});
