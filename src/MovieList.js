import React from "react";

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

const movieItem = styled.div`
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

const MovieList = (props) => {
  const { title, medium_cover_image, id } = props.movie;
  const deleteById = props.deleteById;

  return (
    <div>
      <ItemBody>
        <movieItem>
          <img
            src={medium_cover_image}
            style={{ width: "100%", height: "200px", width: "200px" }}
          />
          <h4>{title}</h4>
          <Button>상세보기</Button>
          <Button onClick={() => deleteById(id)}>삭제</Button>
        </movieItem>
      </ItemBody>
    </div>
  );
};

export default MovieList;
