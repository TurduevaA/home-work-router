import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../store/routThunks";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Phones = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { routs } = useSelector((state) => state.rout);

  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  return (
    <StyledContainer>
      {routs?.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt="" />
          <p>{item.title}</p>
          <button onClick={() => navigate(`/phones/${item.id}`)}>
            подробнeе
          </button>
        </div>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 50px;
  img {
    width: 200px;
    height: 150px;
  }
  div {
    width: 300px;
    height: 250px;
    border: 2px solid #6a096a;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 15px;
    }
    button {
      width: 250px;
      height: 40px;
      border-radius: 12px;
      border: none;
      background-color: #de51de;
      color: white;
      font-size: 18px;
      &:hover {
        background-color: #6a2e6a;
      }
    }
  }
`;
