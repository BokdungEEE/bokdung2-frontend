import { Route, Routes } from "react-router-dom";
import CardListPage from "./pages/CardListPage";
//import LinkPage from "./pages/LinkPage";
import LoginPage from "./pages/LoginPage";
import CardSelectPage from "./pages/CardSelectPage";
import LetterPage from "./pages/LetterPage";
import SentPage from "./pages/SentPage";
import LinkPrevPage from "./pages/LinkPrevPage";
import LinkAfterPage from "./pages/LinkAfterPage";
import OpenPage from "./pages/OpenPage";
import MainPrevPage from "./pages/MainPrevPage";
import MainAfterPage from "./pages/MainAfterPage";
import IntroducePage from "./pages/IntroducePage";
import PickCardPage from "./pages/PickCardPage";

function App() {
  return (
    <Routes>
      <Route path="/linkprev" element={LinkPrevPage()} />
      <Route path="/linkafter" element={LinkAfterPage()} />

      <Route path="/login" element={LoginPage()} />

      <Route path="/open" element={OpenPage()} />

      <Route path="/mainprev" element={MainPrevPage()} />
      <Route path="/mainafter" element={MainAfterPage()} />

      <Route path="/introduce" element={IntroducePage()} />
      <Route path="/sent" element={SentPage()} />
      <Route path="/cardlist" element={CardListPage()} />
      <Route path="/letter" element={LetterPage()} />
      <Route path="/pickcard" element={PickCardPage()} />
      <Route path="/cardselect" element={CardSelectPage()} />
    </Routes>
  );
}

export default App;
