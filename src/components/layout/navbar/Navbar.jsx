import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
        <img
          src="https://res.cloudinary.com/ddtbb44ju/image/upload/v1727995176/logo_lvighp.png"
          alt="logo"
        />

        <ul>
          <li>Todas</li>
          <li>Urbanas</li>
          <li>Deportivas</li>
        </ul>

        <CartWidget />
      </div>
    </>
  );
};
