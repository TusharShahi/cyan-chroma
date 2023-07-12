import { useEffect } from "react";
import { useState } from "react";
import { memo } from "react";
import { displayPictureLink } from "../../tools/constants";
import ContactArea from "./ContactArea";
import styles from "./Sidebar.module.css";

const SideBar = memo(() => {
  const [sidebarClassName, setSidebarClassName] = useState(styles.SideBar);
  const [showBottomContactArea, setShowBottomContactArea] = useState(false);

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname !== "/")
      setSidebarClassName(
        (sidebarClassName) =>
          (sidebarClassName += ` ${styles.sideBarCompressed}`)
      );
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) {
    setShowBottomContactArea(true);
  }

  let roleAttribute = null;
  let mainHeading = `Hey! I am Tushar.
  I like to code.`;

  console.log({ sidebarClassName });
  return (
    <div className={sidebarClassName} {...roleAttribute}>
      <div className={styles.SideBarBox}>
        <div className={styles.welcomeArea}>
          <div className={styles.displayPhotoArea}>
            <img
              src={displayPictureLink}
              alt="Display Picture"
              width={180}
              height={175}
            />
          </div>

          <div className={styles.textArea}>
            <h1>{mainHeading}</h1>
          </div>
        </div>
        {showBottomContactArea && <ContactArea></ContactArea>}
      </div>
    </div>
  );
});
SideBar.type.displayName = "SIDEBAR";
export default SideBar;
