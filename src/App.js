import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Pay from "./Pay";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/pay" element={<Pay />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
