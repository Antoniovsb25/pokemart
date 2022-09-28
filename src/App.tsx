import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import { CartContextProvider } from "./hooks/usePokeCart";

const App = () => {
  return (
    <Router>
      <CartContextProvider>
        <SkeletonTheme baseColor="#f2f2f2" highlightColor="#f5f5f5">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </SkeletonTheme>
      </CartContextProvider>
    </Router>
  );
};

export default App;
