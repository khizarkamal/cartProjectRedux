import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from "../features/cart/cartSlice";
import { closeModal} from "../features/modal/modalSlice";

function Modal() {
    const dispatch = useDispatch();
    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4>
                    Remove all items from your shopping cart
                </h4>
                <div className="btn-container">
                    <button
                        onClick={()=>{
                            dispatch(clearCart()) 
                            dispatch(closeModal())
                        }}
                        className='btn confirm-btn' type='button'>
                        Confirm
                    </button>
                    <button onClick={()=>dispatch(closeModal())} className='btn clear-btn' type='button'>
                        Cancel
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Modal;