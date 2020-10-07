import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const ItemBody = styled.div`
  text-align: center;
  height: 350px;
  width: 400px;
  border: 1px solid orange;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const MovieItem = styled.div`
  position: relative;
  padding-left: 50px;
  text-align: center;
  margin-top: 10px;
`;

const Button = styled.button`
  color: white;
  width: 70px;
  height: 30px;
  margin: 7px;
  background-color: lightsalmon;
`;

const MovieList = () => {
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
    <div>
      {movies.map((movie) => (
        <ItemBody key={movie.id}>
          <MovieItem>
            <img
              src={movie.medium_cover_image}
              style={{ width: "100%", height: "200px" }}
            />
            <h4>{movie.title}</h4>
            <Link to={"/movie/" + movie.id}>상세보기</Link>
            <Button onClick={() => deleteById(movie.id)}>삭제</Button>
          </MovieItem>
        </ItemBody>
      ))}
    </div>
  );
};

export default MovieList;
