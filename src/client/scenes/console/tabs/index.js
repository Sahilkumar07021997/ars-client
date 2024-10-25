import React from "react";
import { RouteConfig } from "./tab-constants";
import { useSelector } from "react-redux";
/**
 * TabWrapper Component
 *
 * This component handles the tab navigation for the different sections of the ARS Artificial Intelligence Reporting System WebApp.
 * It updates the URL based on the selected tab and renders the corresponding component.
 *
 * @returns {JSX.Element}
 */
const TabWrapper = (props) => {
  return (
    <div className="tab-container">
      {RouteConfig[props.currentTab.tabname].element(props)}
    </div>
  );
};

export default TabWrapper;
