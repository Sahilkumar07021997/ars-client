import Balancesheet from "./balancesheet";
import ExecSummary from "./exec-summary";
import IncomeStatement from "./income-statement";
import Kpis from "./kpis";
import {
  Mail as MailIcon,
  Insights as InsightsIcon,
  RequestQuote as RequestQuoteIcon,
  AccountBalance as AccountBalanceIcon,
  SmartToy as SmartToyIcon,
  LinkedIn as LinkedInIcon,
  SmartScreenOutlined
} from "@mui/icons-material";
/**
 * RouteConfig Object
 *
 * This constant defines the routing configuration for the ARS Artificial Intelligence Reporting System WebApp.
 * Each property in the object represents a route with its corresponding tab ID, path, and component to render.
 *
 * @type {{ [key: string]: { tabid: number, path: string, element: JSX.Element } }}
 */
export const RouteConfig = {
  IncomeStatement: {
    tabid: 1,
    path: "/console/incomestatement",
    element: (props) => <IncomeStatement props={props} />,
  },
  Balancesheet: {
    tabid: 2,
    path: "/console/balancesheet",
    element: (props) => <Balancesheet props={props} />,
  },
  Kpis: {
    tabid: 3,
    path: "/console/kpis",
    element: (props) => <Kpis props={props} />,
  },
  ExecSummary: {
    tabid: 4,
    path: "/console/execsummary",
    element: (props) => <ExecSummary props={props} />,
  },
};

/**
 * tabs Object
 *
 * This constant merges menu items with routing information for the ARS Artificial Intelligence Reporting System WebApp.
 * Each object represents a tab with its corresponding id, path, tab name, icon, and text for the drawer.
 *
 * @type {Object.<string, { tabid: number, path: string, tabname: string, text:string, tabDisplay: string, icon: JSX.Element, type: number }>}
 */
export const Tabs = {
  Console: {
    tabid: 0,
    path: "/console",
    tabname: "Console",
    text: "Console",
    tabDisplay: "Console",
    icon: <SmartScreenOutlined />,
    type: 0, // Primary,
    descriptionJsx: () => (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero
        non orci pharetra.
      </p>
    ),
  },
  IncomeStatement: {
    tabid: 1,
    path: "/console/incomestatement",
    tabname: "IncomeStatement",
    text: "Income Statement",
    tabDisplay: "Income Statement",
    icon: <RequestQuoteIcon />,
    type: 0, // Primary,
    descriptionJsx: () => (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero
        non orci pharetra.
      </p>
    ),
  },
  Balancesheet: {
    tabid: 2,
    path: "/console/balancesheet",
    tabname: "Balancesheet",
    text: "Balance Sheet",
    tabDisplay: "Balance Sheet",
    icon: <AccountBalanceIcon />,
    type: 0, // Primary,
    descriptionJsx: () => (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero
        non orci pharetra.
      </p>
    ),
  },
  Kpis: {
    tabid: 3,
    path: "/console/kpis",
    tabname: "Kpis",
    text: "KPIs",
    tabDisplay: "KPIs",
    icon: <InsightsIcon />,
    type: 0, // Primary,
    descriptionJsx: () => (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero
        non orci pharetra.
      </p>
    ),
  },
  ExecSummary: {
    tabid: 4,
    path: "/console/execsummary",
    tabname: "ExecSummary",
    text: "AI Generated Exec Summary",
    tabDisplay: "AI Generated Exec Summary",
    icon: <SmartToyIcon />,
    type: 0, // Primary,
    descriptionJsx: () => (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero
        non orci pharetra.
      </p>
    ),
  },
  Mail: {
    tabid: 5,
    path: "sahilkumardhiman07@gmail.com", // If no route is linked to this
    tabname: "mail",
    text: "Mail",
    tabDisplay: "Mail",
    icon: <MailIcon />,
    type: 1, // Secondary
  },
  Linkedin: {
    tabid: 6,
    path: "https://www.linkedin.com/in/sahil-kumar-aa868218b/", // If no route is linked to this
    tabname: "linkedin",
    text: "LinkedIn",
    tabDisplay: "LinkedIn",
    icon: <LinkedInIcon />,
    type: 1, // Secondary
  },
};

export const MenuItemsTypes = {
  primary: { type: 0 },
  secondary: { type: 1 },
};
