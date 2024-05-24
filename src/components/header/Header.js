import React from "react";
import Logo from "../../images/logo.svg";
import CartIcon from "../../images/icon-cart.svg";
import ProfileIcon from "../../images/image-avatar.png";
import "./HeaderStyles.css";

function Header() {
  const [menuVisibility, setVisibility] = React.useState(false);

  const toggleMenu = () => {
    setVisibility(!menuVisibility ? true : false);
  };

  const closeMenu = () => {
    setVisibility(false);
  };

  return (
    <header>
      <div className="logo-menu-wrap">
        <div className="logo-wrap">
          <button onClick={toggleMenu} className="mobile-menu-toggle"></button>
          <img className="logo" src={Logo} alt="site logo" />
        </div>

        <nav
          className={`primary-menu ${menuVisibility ? "active" : "non-active"}`}
        >
          <button onClick={closeMenu} className="mobile-menu-close"></button>
          <ul>
            <li>
              <a
                href="https://github.com/karawaggio/e-commerce-product-page"
                target="_blank"
                rel="noreferrer"
              >
                Collections
              </a>
            </li>
            <li>
              <a
                href="https://github.com/karawaggio/e-commerce-product-page"
                target="_blank"
                rel="noreferrer"
              >
                Men
              </a>
            </li>
            <li>
              <a
                href="https://github.com/karawaggio/e-commerce-product-page"
                target="_blank"
                rel="noreferrer"
              >
                Women
              </a>
            </li>
            <li>
              <a
                href="https://github.com/karawaggio/e-commerce-product-page"
                target="_blank"
                rel="noreferrer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://github.com/karawaggio/e-commerce-product-page"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="account-icons">
        <img className="cart-icon" src={CartIcon} alt="cart icon" />
        <img className="profile-icon" src={ProfileIcon} alt="profile icon" />
      </div>
    </header>
  );
}

export default Header;
