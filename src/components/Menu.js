import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UlStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  left: 315px;
  text-align: center;
  margin: 30px;
`;
const LiStyle = styled.li`
  list-style: none;
  border: 1px solid lightsalmon;
  background-color: lightsalmon;
  border-radius: 10px;
  padding: 5px;
  width: 100px;
`;

const TStyle = styled.span`
  text-decoration-style: none;
  color: white;
`;

const Menu = () => {
  return (
    <UlStyle>
      <LiStyle>
        <Link to="/movie">
          <TStyle>영화등록</TStyle>
        </Link>
      </LiStyle>
      <LiStyle>
        <Link to="/">
          <TStyle>영화목록</TStyle>
        </Link>
      </LiStyle>
    </UlStyle>
  );
};

export default Menu;
