import HeaderComponent from "../components/mycustom/sections/headercomponent";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div id="main-wrapper">
     <HeaderComponent/>
      <div className="page-wrapper">
        <div className="container-fluid">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
