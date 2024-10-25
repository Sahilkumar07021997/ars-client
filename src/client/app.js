import React, { memo } from "react";
import "../assets/styles/App.css";
import DemoCharts from "./scenes/console/tabs/kpis/demo-charts/DemoCharts";
import Console from "./scenes/console/Console";
import { Routes, Route, Navigate } from "react-router-dom";
/**
 * App Component
 *
 * The root component of the ARS Artificial Intelligence Reporting System WebApp.
 *
 * @returns {JSX.Element}
 */
const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/console" />} />{" "}
    <Route path="/console" element={<Console />} />
  </Routes>
);

const MemoizedApp = memo(App);
export default MemoizedApp;
