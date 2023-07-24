import { HashRouter, Route, Routes } from "react-router-dom";
// import CardListPage from "./pages/CardListPage";
import LinkPage from "./pages/LinkPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* <Route index='/' element={CardListPage()} /> */}
        <Route index='/link' element={LinkPage()} />
      </Routes>
    </HashRouter>
  );
}

export default App
