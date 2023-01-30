import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>Travel</div>
      <nav>
        <ul className={styles.header__nav}>
          <li>Home</li>
          <li
            className={styles.header__dropdown}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Destinations
            {showDropdown && (
              <ul className={styles.header__subNav}>
                <li>Bali</li>
                <li>London</li>
                <li>Tokyo</li>
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
          <Button variant="secondary">Subscribe</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
