import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';

function CartContainer() {
    const { cartItems, total, amount } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className='cart'>
            <header>
                <h2>Your Bag</h2>
            </header>
            <div>
                {cartItems.map((cartItem) => {
                    return (
                        <CartItem key={cartItem.id} {...cartItem} ></CartItem>
                    )
                })}

            </div>
            <footer>
                <hr></hr>
                <div className='cart-total'>
                    <h2>Totals: <span>${total.toFixed(2)}</span></h2>
                </div>
                <button
                    onClick={
                        ()=> {dispatch(openModal())}
                        // () => { dispatch(clearCart()) }
                    }
                    className='btn clear-btn'>
                    Clear Button
                </button>
            </footer>
        </section>
    )
}

export default CartContainer