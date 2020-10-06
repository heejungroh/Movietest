import React, { useState } from "react";
import styled from "styled-components";

const RegStyle = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Movie = () => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    medium_cover_image: "",
    summary: "",
  });

  function inputHandle(e) {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
    console.log(movie);
  }

  function submit(e) {
    e.preventDefault();
    console.log(movie);

    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("성공");
        }
      });
  }
  return (
    <RegStyle>
      <h2>영화 등록</h2>
      <form>
        <input
          type="text"
          onChange={inputHandle}
          name="title"
          value={movie.title}
          placeholder="제목을 입력하세요"
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          name="rating"
          value={movie.rating}
          placeholder="평점을 입력하세요"
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          name="summary"
          value={movie.summary}
          placeholder="줄거리를 입력하세요"
        />
        <br />
        <input
          type="text"
          onChange={inputHandle}
          name="medium_cover_image"
          value={movie.medium_cover_image}
          placeholder="medium_cover_image 입력하세요"
        />
        <br />
        <button onClick={submit}>등록</button>
      </form>
    </RegStyle>
  );
};

export default Movie;
