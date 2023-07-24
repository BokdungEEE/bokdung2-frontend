import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardListPage from "./pages/CardListPage";
import LinkPage from "./pages/LinkPage";
import LoginPage from "./pages/KakaoPage";
import CardSelectPage from "./pages/CardSelectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={CardListPage()} />
        <Route path='/link' element={LinkPage()} />
        <Route path='/login' element={LoginPage()} />
        <Route path="/cardselect" element={CardSelectPage()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
