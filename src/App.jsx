import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardListPage from "./pages/CardListPage";
import LinkPage from "./pages/LinkPage";
import LoginPage from "./pages/KakaoPage";
import CardSelectPage from "./pages/CardSelectPage";
import LetterPage from "./pages/LetterPage";
import SentPage from "./pages/SentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={CardListPage()} />
        <Route path='/link' element={LinkPage()} />
        <Route path='/login' element={LoginPage()} />
        <Route path="/cardselect" element={CardSelectPage()} />
        <Route path="/letter" element={LetterPage()} />
        <Route path="/sent" element={SentPage()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
