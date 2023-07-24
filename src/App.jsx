import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardListPage from "./pages/CardListPage";
import LinkPage from "./pages/LinkPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={CardListPage()} />
        <Route path='/link' element={LinkPage()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
