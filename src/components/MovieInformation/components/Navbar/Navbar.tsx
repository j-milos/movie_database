import { Link } from "react-router-dom";
import s from "./Navbar.module.scss";
import { Switch } from "../../../core/Switch/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../../../../providers/ThemeProvider";

function Navbar() {
  const { theme, changeTheme } = useThemeContext();

  return (
    <div className={s.navbar}>
      <div className={s.navbarTextWrapper}>
        <Link to="/">
          <div className={s.titleLogo}>
            <img src="../mvlogo.png" alt="" />
            <span>Movie Database</span>
          </div>
        </Link>
      </div>
      <div className={s.spansWrapper}>
        <span>Movies</span>
        <span>TV Shows</span>
        <span>People</span>
        <span>More</span>
        <span>English</span>
        <span className={s.verticaLine}> |</span>
        <div className={s.toogleBtnWrapper}>
          <FontAwesomeIcon icon={faSun} />
          <span>
            <Switch
              value={theme === "dark"}
              onChange={(value) => {
                if (value) {
                  changeTheme("dark");
                } else {
                  changeTheme("light");
                }
              }}
            />
          </span>
          <FontAwesomeIcon icon={faMoon} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
