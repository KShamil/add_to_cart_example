import React from "react";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cImage, cName, cPrice, addProduct }) => {
  const { addItem } = useCart();
  const notify = () => toast("Cart added!");
  return (
    <div className="cart_container">
      <div className="cart">
        <div className="cart_image">
          <img src={cImage} alt="error" />
          <div className="title">
            <h2>{cName}</h2>
          </div>
        </div>
        <div className="products_info">
          <div className="price_button">
            <p>{cPrice} AZN</p>
            <button onClick={() => (notify(addItem(addProduct)))} type="button">
              Add to Cart
            </button>
            <ToastContainer 
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
