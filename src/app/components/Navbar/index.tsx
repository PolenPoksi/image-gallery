import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarWrapper}>
        <Link to="/" className={style.appName}>
          AppName
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
