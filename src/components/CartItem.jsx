import React from 'react'
import { ChevronUp, ChevronDown } from "../icons";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from 'react-redux';


function CartItem({ id, img, title, price, amount }) {
    const dispatch = useDispatch();
    return (
        <article className='cart-item'>
            <img src={img} alt={title}></img>
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button onClick={() => dispatch(removeItem(id))} className='remove-btn'>remove button</button>
            </div>
            <div>
                <button onClick={() => dispatch(increase(id))} className='amount-btn'>
                    <ChevronUp></ChevronUp>
                </button>
                <p className='amount'>{amount}</p>
                <button
                    onClick={() => {
                        if (amount === 1) {
                            dispatch(removeItem(id));
                            return
                        }
                        dispatch(decrease(id))
                    }
                }
                    className='amount-btn'>
                    <ChevronDown></ChevronDown>
                </button>
            </div>
        </article>
    )
}

export default CartItem