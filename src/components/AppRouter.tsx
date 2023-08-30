import { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { privateRoutes, publicRoutes } from "../router/routes";
import useAuth from '../hooks/use-auth';

import MoonSpin from "./load_spinners/MoonSpin";


const AppRouter = () => {

  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          {privateRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Suspense fallback = {<MoonSpin />}><Component /></Suspense>} />
          ))}
          <Route path="*" element={<Navigate to="/authhome" />} />
        </>
      ) : (
        <>
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Suspense fallback = {<MoonSpin />}><Component /></Suspense>} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default AppRouter;