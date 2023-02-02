import React, { useContext, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { SubscriptionContext } from "../../contexts/SubscriptionContext";
import Button from "../Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const { toggleSubscription, showSubscription } =
    useContext(SubscriptionContext);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>Travel</div>
      <nav>
        <ul className={styles.header__nav}>
          <li onClick={() => navigate("/")}>Home</li>
          <li
            className={styles.header__dropdown}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Destinations <BiChevronDown className={styles.header__icon} />
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
          <Button variant="secondary" onClick={toggleSubscription}>
            Subscribe
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
