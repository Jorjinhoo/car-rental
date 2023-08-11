import { Route, Routes } from "react-router-dom";

import { privateRoutes, publicRoutes } from "../router/routes";



const AppRouter = () => {
  const user = false;

  return user ? 
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