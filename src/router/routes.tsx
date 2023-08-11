import { AUTH_HOME_ROUTE, HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "./consts";
import Login from "../pages/Login";
import AuthHome from "../pages/AuthHome";
import Home from "../pages/Home";
import Signup from "../pages/Signup";

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
    path: SIGNUP_ROUTE,
    Component: Signup
  }
];

export const privateRoutes: IRoute[] = [
  {
    path: AUTH_HOME_ROUTE,
    Component: AuthHome
  }
];