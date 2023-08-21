import { AUTH_HOME_ROUTE, HOME_ROUTE, LOGIN_ROUTE, SELECTED_PERIOD } from "./consts";
import Login from "../pages/Login";
import AuthHome from "../pages/AuthHome";
import Home from "../pages/Home";
import SelectedPeriod from "../pages/SelectedPeriod";

interface IRoute {
  path: string;
  Component: React.ComponentType<any>;
}

export const publicRoutes: IRoute[] = [
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  {
    path: SELECTED_PERIOD,
    Component: SelectedPeriod
  }
];

export const privateRoutes: IRoute[] = [
  {
    path: AUTH_HOME_ROUTE,
    Component: AuthHome
  },
  {
    path: SELECTED_PERIOD,
    Component: SelectedPeriod
  }
];