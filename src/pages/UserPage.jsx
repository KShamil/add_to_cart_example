import React from "react";
import Cart from "../components/Cart";
import smartfons from "../data/phones";

const UserPage = () => {
  return (
    <div className="container userpage_container">
      {smartfons.map((fd, i) => (
        <Cart
          key={i}
          cImage={fd.image}
          cName={fd.name}
          cPrice={fd.price}
          addProduct={fd}
        />
      ))}
    </div>
  );
};

export default UserPage;
