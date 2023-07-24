import { Route, Routes } from "react-router-dom";
import CardListPage from "./pages/CardListPage";
import LinkPage from "./pages/LinkPage";
import LoginPage from "./pages/KakaoPage";
import CardSelectPage from "./pages/CardSelectPage";
import LetterPage from "./pages/LetterPage";
import SentPage from "./pages/SentPage";

function App() {
  return (
    <Routes>
      <Route path='/main' element={CardListPage()} />
      <Route path='/' element={LinkPage()} />
      <Route path='/login' element={LoginPage()} />
      <Route path="/cardselect" element={CardSelectPage()} />
      <Route path="/letter" element={LetterPage()} />
      <Route path="/sent" element={SentPage()} />
    </Routes>
  );
}

export default App
