import Button from "../Button/Button";
import DecorativeLine from "../DecorativeLine/DecorativeLine";
import Title from "../Title/Title";
import styles from "./FifthSection.module.css";
import cn from "classnames";

function FifthSection() {
  return (
    <section className={styles["fifth-section"]}>
      <DecorativeLine className={styles["fifth-section__dash"]} />
      <div className="wrapper">
        <div className={styles["content"]}>
			<h2 className={styles["title"]}>Чего же ты ждешь?</h2>
			<Button modificator="main">Подать заявку</Button>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;
