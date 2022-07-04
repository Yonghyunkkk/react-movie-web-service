import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Nav from "./components/Nav";
import TopRating from "./routes/TopRating";
import Animation from "./routes/Animation";
import Action from "./routes/Action";
import Romance from "./routes/Romance";

function App() {
  return(
  <Router>
    <Routes>
      <Route path="/movie/:id" element={<Detail />} />
      <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
      <Route path="/movie/TopRating" element={<TopRating />} />
      <Route path="/movie/Animation" element={<Animation />} />
      <Route path="/movie/Action" element={<Action />} />
      <Route path="/movie/Romance" element={<Romance />} />
    </Routes>
    <Nav />
  </Router>);
}

export default App;
