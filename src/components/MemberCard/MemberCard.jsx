import styles from "./MemberCard.module.css";
import Icons from "../Icons/Icons";
import { Link } from "react-router-dom";

function MemberCard({ member }) {
  return (
    <Link to={`/members/${member.id}`}>
    <div className={styles["card"]}>
      <div className={styles["image"]}></div>
      <p className={styles["title"]}>{member.gh}</p>
      <div className={styles["skills"]}>
        {
          member.langs.map((item, index) => {
            return <Icons name={item} key={index} />
          })
        }
      </div>
      <div className={styles["contacts"]}>
        <div href="#!" className={styles["contact-btn"]}>
          <Icons name="discord" />
        </div>
      </div>
    </div>
    </Link>
  );
}

export default MemberCard;
