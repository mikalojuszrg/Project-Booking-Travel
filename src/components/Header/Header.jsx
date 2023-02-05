import React, { useContext, useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { SubscriptionContext } from "../../contexts/SubscriptionContext";
import Button from "../Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { toggleSubscription, showSubscription } =
    useContext(SubscriptionContext);

  const toggleShowNav = () => {
    setShowNav((prevValue) => !prevValue);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 800) {
        setShowNav(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo} onClick={() => navigate("/")}>
        Travel
      </div>
      <nav>
        <AiOutlineMenu
          className={styles.header__hamburger}
          onClick={toggleShowNav}
        />
        {
          <ul
            className={
              !showNav ? styles.header__nav : styles.header__hamburgerNav
            }
          >
            <li onClick={() => navigate("/")}>Home</li>
            <li
              className={styles.header__dropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              Destinations <BiChevronDown className={styles.header__icon} />
              {showDropdown && (
                <ul className={styles.header__subNav}>
                  <li onClick={() => navigate("/Bali")}>Bali</li>
                  <li onClick={() => navigate("/London")}>London</li>
                  <li onClick={() => navigate("/Tokyo")}>Tokyo</li>
                </ul>
              )}
            </li>
            <li
              onClick={() => {
                navigate("/contacts");
              }}
            >
              Contact
            </li>
            <Button variant="secondary" onClick={toggleSubscription}>
              Subscribe
            </Button>
          </ul>
        }
      </nav>
    </header>
  );
};

export default Header;
