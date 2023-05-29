import Home from "./components/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tasktable from "./components/Tasktable";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasktable" element={<Tasktable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
