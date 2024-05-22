import Logo from "../../images/logo.svg";
import CartIcon from "../../images/icon-cart.svg";
import ProfileIcon from "../../images/image-avatar.png";
import "./HeaderStyles.css";

function Header() {
  return (
    <header>
      <div className="logo-wrap">
        <button className="mobile-menu-toggle"></button>
        <img className="logo" src={Logo} alt="site logo" />
      </div>

      <nav className="primary-menu" data-visible="false">
        <button className="mobile-menu-close"></button>
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

      <div className="account-icons">
        <img className="cart-icon" src={CartIcon} alt="cart icon" />
        <img className="profile-icon" src={ProfileIcon} alt="profile icon" />
      </div>
    </header>
  );
}

export default Header;
