import { HashRouter, Route, Routes } from "react-router-dom";
import CardListPage from "./pages/CardListPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index='/' element={CardListPage()} />
        {/* <Route index='/' element={SamplePage2} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App
