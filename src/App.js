import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Movie from "./pages/Movie";

import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div>
      <Menu />
      <Route path="/" exact={true} component={MovieList} />
      <Route path="/movie" exact={true} component={Movie} />
      <Route path="/movie/:id" exact={true} component={MovieDetail} />
    </div>
  );
}

export default App;
