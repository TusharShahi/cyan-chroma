import React, { memo } from "react";
import styles from "./Navlink.module.css";

const Navlink = memo((props) => {
  return (
    <div className={styles.Navlink}>
      <a href={`/${props.linkAddress}`}>{props.linkText}</a>
    </div>
  );
});

Navlink.type.displayName = "NAVLINK";

export default Navlink;
