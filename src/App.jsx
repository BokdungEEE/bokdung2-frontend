import { BrowserRouter, Route, Routes } from "react-router-dom";
import SamplePage from "./pages/SamplePage";
import SamplePage2 from "./pages/SamplePage2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index='/' element={SamplePage} />
        <Route index='/' element={SamplePage2} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
