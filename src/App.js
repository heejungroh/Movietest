import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Movie";

import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then(function (res) {
        console.log(res);
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        setMovies(res);
      });
  }, []);

  function deleteById(id) {
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "delete",
    })
      .then(function (res) {
        return res.text();
      })
      .then(function (res) {
        console.log(res);
        if (res === "ok") {
          // let cardItem = document.querySelector("#card-" + id);
          // cardItem.parentElement.removeChild(cardItem);
          alert("삭제완료");
        } else {
          alert(id + " 삭제실패");
        }
      });
  }

  return (
    <div className="grid-container">
      {movies.map((movie) => (
        <MovieList movie={movie} deleteById={deleteById} />
      ))}
      <Movie />
    </div>
  );
}

export default App;
