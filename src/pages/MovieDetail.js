import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DivStyle = styled.div``;

const FormStyle = styled.form`
  text-align: center;
`;

const DetailStyle = styled.div`
  border: 1px solid orange;
`;

const HStyle = styled.h4`
  font-size: 20px;
`;

const TStyle = styled.span`
  padding: 3px;
`;

const MovieDetail = (props) => {
  console.log("디테일", props.match.params.id);
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    medium_cover_image: "",
    summary: "",
  });

  function movieFetch(id) {
    fetch("http://10.100.102.2:8000/api/movie/" + id)
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      });
  }

  useEffect(() => {
    movieFetch(props.match.params.id);
  }, []);

  // const inputChange = (e) => {
  //   setMovie({ ...movie, [e.target.name]: e.target.value });
  // };

  // const movieUpdate = (e) => {
  //   e.preventDefault();
  //   fetch("http://10.100.102.2:8000/api/movie/" + movie.id, {
  //     method: "put",
  //     body: JSON.stringify(movie),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.text())
  //     .then((res) => {
  //       if (res === "ok") {
  //         alert("영화수정 성공");
  //         props.history.push("/");
  //       }
  //     });
  // };

  return (
    <DivStyle>
      <FormStyle>
        <HStyle>{props.match.params.id} 상세보기 페이지 </HStyle>
        <DetailStyle>
          <TStyle>제목 : {movie.title}</TStyle> <br />
          <hr style={{ border: "solid 0.1px orange" }} />
          <TStyle>평점 : {movie.rating}</TStyle>
          <br />
          <hr style={{ border: "solid 0.1px orange" }} />
          <TStyle>사진주소 : {movie.medium_cover_image}</TStyle> <br />
          <hr style={{ border: "solid 0.1px orange" }} />
          <TStyle>요약 : {movie.summary}</TStyle> <br />
        </DetailStyle>
      </FormStyle>
    </DivStyle>
  );
};

export default MovieDetail;
