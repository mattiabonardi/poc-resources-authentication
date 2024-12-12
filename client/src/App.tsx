import { BrowserRouter, Route, Routes } from "react-router-dom";
import App1 from "./App1";
import App2 from "./App2";

function App() {
  return (
    <>
      <BrowserRouter basename="web">
        <Routes>
          <Route path="/app/app1" Component={App1}></Route>
          <Route path="/app/app2" Component={App2}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
