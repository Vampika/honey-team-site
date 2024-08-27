import Icons from "../Icons/Icons";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles["header-color"]}>
      <div className="wrapper">
        <div className={styles["header"]}>
          <div className={styles["left-part"]}>
            <a href="#!"><Logo color="white" /></a>
            <ul className={styles["header__nav"]}>
              <li><a href="#!">Проекты</a></li>
              <li><a href="#!">Участники</a></li>
              <li><a href="#!">Блог</a></li>
            </ul>
          </div>
          <div className={styles["right-part"]}>
		  <a href="#!"><Icons name="discord"/></a>
		  <a href="#!"><Icons name="telegram"/></a>
		  <a href="#!"><Icons name="github"/></a>
		  </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
