import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRouter from "./components/AppRouter";




const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
