import Footer from "./Footer";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1060) {
      setShow(true);
    } else {
      setShow(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1060) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <div className="layout">
      {show ? <Navbar /> : <MobileNav />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
