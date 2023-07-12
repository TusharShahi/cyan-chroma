import { memo } from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import styles from "./layout.module.css";
import ContactArea from "./SideBar/ContactArea";
import { useEffect, useState } from "react";

const Layout = memo(({ children }) => {
  const [mainClassName, setMainClassName] = useState("");
  const [showBottomContactArea, setShowBottomContactArea] = useState(false);
  const [pageNotFound, setPageNotFound] = useState(false);

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname !== "/")
      setMainClassName(
        (mainClassName) => (mainClassName += ` ${styles.shiftedMain}`)
      );
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setShowBottomContactArea(true);
    }

    setPageNotFound(pathname !== "/404");
  }, []);

  return (
    <div className={styles.LayoutWrapper}>
      {pageNotFound && <Header></Header>}
      <div className={styles.ContentWrapperBox}>
        {pageNotFound && <SideBar></SideBar>}
        <main className={mainClassName}>{children}</main>
      </div>
      {pageNotFound && showBottomContactArea && (
        <div className={styles.BottomContactBox}>
          <ContactArea></ContactArea>
        </div>
      )}
    </div>
  );
});
Layout.type.displayName = "LAYOUT";
export default Layout;
