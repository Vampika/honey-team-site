import styles from "./Button.module.css";
import cn from "classnames";

function Button({children, modificator, link}) {
	return(<a href={link} className={cn(styles["button"], {[styles["orange"]]: modificator === "main", [styles["white"]]: modificator === "white"})}>{children}</a>)
}

export default Button;