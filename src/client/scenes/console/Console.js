import React, { useEffect } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import LeftDrawer from "../../components/right-drawer";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { MenuItemsTypes, Tabs } from "./tabs/tab-constants";
import { updateTab } from "../../../reducers/modules/console/consoleSlice";
import TabWrapper from "./tabs";
import _ from "lodash";
import Footer from "../../components/footer";
import { Routes, Route, Navigate } from "react-router-dom";
import ComingSoon from "../../components/coming-soon";
/**
 * Console Component
 *
 * This component represents the main console or dashboard of the ARS Artificial Intelligence Reporting System WebApp.
 *
 * @returns {JSX.Element}
 */
const Console = () => {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.console);

  useEffect(() => {
    const { tabid, path, tabname, tabDisplay } = Tabs.Console;
    dispatch(
      updateTab({
        tabid: tabid,
        path: path,
        consoleSettings: {},
        tabname: tabname,
        tabDisplay: tabDisplay,
      })
    );
  }, [dispatch]);

  const _drawerMenuItems = () => {
    return {
      primaryMenuItems: _.filter(
        Tabs,
        (tab) => tab.type === MenuItemsTypes.primary.type
      ),
      secondaryMenuItems: _.filter(
        Tabs,
        (tab) => tab.type === MenuItemsTypes.secondary.type
      ),
    };
  };

  const openOutlook = (path) => {
    window.location.href = `mailto:${path}?subject=Your%20Subject&body=Your%20message%20here&cc=cc@example.com&bcc=bcc@example.com`;
  };

  const _tabChange = (tab) => {
    const { tabid, path, tabname, type, tabDisplay } = tab;
    if (type === MenuItemsTypes.primary.type) {
      dispatch(
        updateTab({
          tabid: tabid,
          path: path,
          consoleSettings: {},
          tabname: tabname,
          tabDisplay: tabDisplay,
        })
      );
    } else if (type === MenuItemsTypes.secondary.type) {
      if (tabid === Tabs.Linkedin.tabid) {
        window.open(path, "_blank");
      } else if (tabid === Tabs.Mail.tabid) {
        openOutlook(path);
      }
    }
  };

  return (
    <div className="console">
      <AppBar position="static">
        <Toolbar className="console-toolbar">
          <LeftDrawer menuItems={_drawerMenuItems()} tabChange={_tabChange} />
          <h1 className="console-header">
            <PrecisionManufacturingIcon className="header-logo" />
            Artificial Reporting System
          </h1>
        </Toolbar>
      </AppBar>
      <div className="console-content-container">
        {currentTab.tabid !== Tabs.Console.tabid ? (
          <TabWrapper currentTab={currentTab} />
        ) : (
          <div className="tab-container">
            <h2 className="console-heading">Console</h2>
            <div className="grid-container">
              {_.map(Tabs, (tab) => {
                if (
                  tab.type === MenuItemsTypes.primary.type &&
                  tab.tabid !== Tabs.Console.tabid
                ) {
                  return (
                    <button
                      className="grid-item"
                      onClick={() => _tabChange(tab)}
                      key={tab.id || tab.tabDisplay}
                    >
                      <h3>{tab.tabDisplay}</h3>
                      {tab.descriptionJsx()}
                    </button>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Console;
