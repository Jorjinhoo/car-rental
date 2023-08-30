import { lazy } from "react";

import { ABOUT_US_ROUTE, AUTH_HOME_ROUTE, HOME_ROUTE, LOGIN_ROUTE, OFFER_ROUTE, RENT_CAR_ROUTE, SELECTED_PERIOD } from "./consts";

const Login = lazy(() => import('../pages/Login'));
const AuthHome = lazy(() => import('../pages/AuthHome'));
const Home = lazy(() => import('../pages/Home'));
const SelectedPeriod = lazy(() => import('../pages/SelectedPeriod'));
const RentCar = lazy(() => import('../pages/RentCar'));
const Offer = lazy(() => import('../pages/Offer'));
const AboutUs = lazy(() => import('../pages/AboutUs'));

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