import { describe } from '@jest/globals';
import { Cart, CartContents } from '@entities/useCart';
import { mock } from 'jest-mock-extended';
import { UseQueryResult } from 'react-query';
import Product from '@dtos/Product';

describe('Cart', () => {
    const queryResults = mock<UseQueryResult<CartContents>>();

    describe('#add', () => {
        it('should create a new entry if it is not yet in the cart', () => {
            const cart = new Cart(queryResults);
            cart.add(new Product({ id: 3, price: 29.99, name: "Fancy Soap"}), 3);
            expect(cart.length).toEqual(1);
        });
    });
});
