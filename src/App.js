import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./page1/Home/Home";
import MovieList from "./Components/movielist/MovieList";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
function App() {
  return (
    <div> 
      <Header />
      <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="movie/:id" element={<MovieDetail />}></Route>
      </Routes></div>
  )
}

export default App;
