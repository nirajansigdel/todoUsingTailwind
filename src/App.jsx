import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasklist from "./pages/tasklist";
import Projectoverview from "./pages/projectoverview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Tasklist />}></Route>
        <Route
          exact
          path="/projectoverview"
          element={<Projectoverview />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
