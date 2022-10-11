/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { calulateTotals, getCartItems } from "./features/cart/cartSlice";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import Modal from "./components/modal";


function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calulateTotals());
  }, [cartItems]);


  useEffect(()=>{
    dispatch(getCartItems());
  },[])
  if(isLoading){
    return (
      <div className="loading">
        <h1>Loading....</h1>
      </div>
    )
  }

  return (
    <main>
      <Navbar></Navbar>
      <CartContainer></CartContainer>
      { isOpen ? <Modal></Modal> : null }
    </main>);
}
export default App;
