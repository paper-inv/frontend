import NavBar from "../components/navbar/NavBar";

import PropTypes from "prop-types";
import BreadCrumbs from "../components/breadcrumbs/breadCrumbs";

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <div className="main">
        <NavBar />
        <BreadCrumbs />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
