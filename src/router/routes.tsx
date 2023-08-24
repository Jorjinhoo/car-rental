import { ABOUT_US_ROUTE, AUTH_HOME_ROUTE, HOME_ROUTE, LOGIN_ROUTE, OFFER_ROUTE, RENT_CAR_ROUTE, SELECTED_PERIOD } from "./consts";
import Login from "../pages/Login";
import AuthHome from "../pages/AuthHome";
import Home from "../pages/Home";
import SelectedPeriod from "../pages/SelectedPeriod";
import RentCar from "../pages/RentCar";
import Offer from "../pages/Offer";
import AboutUs from "../pages/AboutUs";

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
  },
  {
    path: RENT_CAR_ROUTE,
    Component: RentCar
  },
  {
    path: OFFER_ROUTE,
    Component: Offer
  },
  {
    path: ABOUT_US_ROUTE,
    Component: AboutUs
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
  },
  {
    path: RENT_CAR_ROUTE,
    Component: RentCar
  },
  {
    path: OFFER_ROUTE,
    Component: Offer
  },
  {
    path: ABOUT_US_ROUTE,
    Component: AboutUs
  }
];