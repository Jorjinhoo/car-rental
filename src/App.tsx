import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import CircleSpin from "./components/load_spinners/CircleSpin";

const Header = lazy(() => import("./components/header/Header"));
const Footer = lazy(() => import("./components/footer/Footer"));
const AppRouter = lazy(() => import("./components/AppRouter"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircleSpin />}>
        <Header />
        <AppRouter />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
