import React from "react";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
  const {
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();
  const notify = () => toast("Cart deleted!");
  return (
    <div classname="container">
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((fd, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td className="td_img">
                <img src={fd.image} width={100} alt="" />
              </td>
              <td className="td_name">{fd.name}</td>
              <td className="td_price">{fd.price * fd.quantity} AZN</td>
              <td className="td_quantity">
                <button
                  onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}
                  className="minus"
                >
                  -
                </button>
                <span>{fd.quantity}</span>
                <button
                  onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}
                  className="plus"
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="delete_button"
                  onClick={() => {
                    notify(removeItem(fd.id));
                  }}
                >
                  <i class="fa-solid fa-trash"></i>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="container total_price">
        Total Price: <span>{cartTotal} AZN</span>
      </h4>
    </div>
  );
};

export default ProductList;
