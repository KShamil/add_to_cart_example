import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const { totalItems } = useCart();
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand"  href="https://apple.com">
          <i class="fa-brands fa-apple"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">
                Sing in
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link className="btn btn_basket" type="submit" to="/list">
              <i class="fa-sharp fa-solid fa-basket-shopping"></i>
            </Link>
            <button className="total_items">{totalItems}</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
