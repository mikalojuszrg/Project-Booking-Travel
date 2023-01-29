import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>Travel</div>
      <nav>
        <ul className={styles.header__nav}>
          <li>Home</li>
          <li>Destinations</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
