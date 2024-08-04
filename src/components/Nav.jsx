import classes from "./Nav.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.nav}>
      <div className={classes.logo}>Organo</div>

      <ul className={`${classes.navLinks} ${isOpen ? classes.open : ""}`}>
        <li><a href="#" className={classes.active}>Home</a></li>
        <li><a href="#">Delivery</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact</a></li>
        <li><button className={classes.btn}>Get Started</button></li>
      </ul>

      <label htmlFor="navtoggle" className={classes.navtoggleLabel} onClick={handleToggle}>
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className={classes.menuIcon} />
      </label>
    </div>
  );
}

export default Nav;
