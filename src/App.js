import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Pages/Home";
import CoinPage from "./Component/Pages/CoinPage";
import ErrorPage from "./Component/ErrorPage";
import Alert from "./Component/Banner/AlertPage";

function App() {
  return (
    <Router>
      <div className="main-app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/coins/:id" element={<CoinPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Alert />
      </div>
    </Router>
  );
}

export default App;
