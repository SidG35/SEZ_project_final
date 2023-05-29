import Home from "./components/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Ganttchart from "./components/Ganttchart";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ganttchart" element={<Ganttchart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
