import Button from "../Button/Button";
import styles from "./MainSection.module.css";

function MainSection() {
return(<section className={styles["main-section"]}>
	<div className="wrapper">
		<div className={styles["main-section__wrapper"]}>
			<div className={styles["logo"]}>
				<img src="images/logo_big.png"></img>
			</div>
			<h1 className={styles["header"]}>HoneyTeam</h1>
			<p className={styles["text"]}>Мы - команда разработчиков, которые создают <br></br> различные проекты для помощи людям.</p>
			<div className={styles["buttons"]}><Button modificator="main" >GitHub</ Button><Button modificator="white">Участники</ Button></div>
		</div>
	</div>
</section>)
}

export default MainSection;