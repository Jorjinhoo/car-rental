import { Route, Routes, Navigate } from "react-router-dom";

import { privateRoutes, publicRoutes } from "../router/routes";
import useAuth from '../hooks/use-auth';


const AppRouter = () => {

  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          {privateRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<Navigate to="/authhome" />} />
        </>
      ) : (
        <>
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default AppRouter;