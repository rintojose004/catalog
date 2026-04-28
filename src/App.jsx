import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { ItemDetails } from "./pages/ItemDetails";
import { Error } from "./pages/Error";
import { ScrollToTop } from "./components/ScrollToTop";


function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:slug" element={<ItemDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
