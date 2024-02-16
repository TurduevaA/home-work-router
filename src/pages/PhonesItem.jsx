import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSinglePhotos } from "../store/routThunks";
import styled from "styled-components";

export const PhonesItem = () => {
  const dispatch = useDispatch();
  const { singlePhotos } = useSelector((state) => state.rout);
  const { newId } = useParams();
  useEffect(() => {
    dispatch(getSinglePhotos(newId));
  }, []);

  return (
    <StyledBlock>
      <img src={singlePhotos.imageUrl} alt="" />
      <p>{singlePhotos.title}</p>
      <Link to="/phones"> Go to phones page</Link>
    </StyledBlock>
  );
};

const StyledBlock = styled.div`
  width: 300px;
  height: 250px;
  border: 2px solid #6a096a;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px;

  img {
    width: 200px;
    height: 150px;
  }
  p {
    font-size: 15px;
  }
`;
