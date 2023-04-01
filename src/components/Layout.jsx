import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaShoppingBag } from "react-icons/fa";
import { MdMenu, MdPersonPin } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import AdminNav from "../admin/AdminNav";
import logo from "../images/banner2.png";
import Footer from "../pages/footer/Footer";

const Layout = (props) => {
  const location = useLocation();
  const [showDrawer, setShowDrawer] = useState(false);
  const handleClose = () => {
    setShowDrawer(false);
  };
  const handleOpen = () => {
    setShowDrawer(true);
  };
  function Navigation() {
    return (
      <div>
        {location.pathname.startsWith("/dashboard") ? <AdminNav /> : null}
      </div>
    );
  }
  return (
    <div className="app">
      <nav className="nav">
        <div className="container">
          <div className="left">
            <div className="left-box">
              <button onClick={handleOpen} className="menu-button">
                <MdMenu size={32} />
              </button>
              <Link className="logo-link" to={"/home"}>
                <img className="logo-nav" src={logo} />
              </Link>
              <ul className="nav-list">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/AdminNav">Admin</Link>
                </li>
                <li>
                  <Link to={"/"}>Shop</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/book">Book</Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
                <li>
                  <Link to="/OrderCon">OrderCon</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="right-box">
              <ul className="nav-list">
                <li>
                  <Link className="icon-button" to="/login">
                    <MdPersonPin />
                  </Link>
                </li>
                <li>
                  <Link className="icon-button" to="/viewCart">
                    <FaShoppingBag /> <p>12</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Offcanvas show={showDrawer} onHide={handleClose}>
        <Offcanvas.Header>
          <Link to={"/home"}>
            <img className="logo-nav-drawer" src={logo} />
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="drawer-nav-list">
            <li onClick={handleClose}>
              <Link to="/home">Home</Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/AdminNav">Admin</Link>
            </li>
            <li onClick={handleClose}>
              <Link to={"/"}>Shop</Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/contact">Contact</Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/book">Book</Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/product">Product</Link>
            </li>
            <li onClick={handleClose}>
              <Link to="/OrderCon">OrderCon</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <main className="main">{props.children}</main>
      <footer className="Footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
