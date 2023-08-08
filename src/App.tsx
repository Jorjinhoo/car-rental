import {BrowserRouter, Route, Router, Routes} from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/pages/home/Home";




const App = () => {
  return (
   <BrowserRouter>
   
     <Header />

     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>

   </BrowserRouter>
  );
}

export default App;
