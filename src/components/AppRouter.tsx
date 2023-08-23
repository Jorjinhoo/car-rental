import { Route, Routes } from "react-router-dom";

import { privateRoutes, publicRoutes } from "../router/routes";
import useAuth from '../hooks/use-auth';


const AppRouter = () => {

  const { isAuthenticated } = useAuth();

  return isAuthenticated ? 
    (
      <Routes>
        {privateRoutes.map(({path, Component}) =>
        <Route key={path} path={path} Component={Component} />
        )}
      </Routes>
    )
    :
    (
      <Routes>
        {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} Component={Component} />
        )}
      </Routes>
    )
}

export default AppRouter;