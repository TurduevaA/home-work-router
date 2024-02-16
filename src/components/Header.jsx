import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledContainer>
      <Link to="/">Mobile</Link>
      <div>
        <Link to="/about">about</Link>
        <Link to="/phones">phones</Link>
        <Link to="/profile">profile</Link>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: #cf24cf;

  div {
    display: flex;
    gap: 30px;
  }
  a {
    font-size: 30px;
    font-weight: 800px;
    color: white;
  }
`;
