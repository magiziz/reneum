import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  min-width: 200px;
  margin-left: 35px;
`;

export const CardImage = styled.div`
  height: 200px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  border-radius: 5px;
`;

export const CardLocation = styled.p`
  font-weight: 500;
  color: #8990a0;
  font-size: 17px;
  text-transform: capitalize;
`;

export const CardName = styled.p`
  font-weight: 700;
  color: #4183c4;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 8px;
`;

export const CardType = styled.p`
  display: flex;
  align-items: center;
  color: #1b274b;
  font-size: 15px;
  font-weight: 700;
  margin-top: 4px;
  text-transform: capitalize;
`;

export const CardPrice = styled.div`
  padding: 12px;
  position: absolute;
  left: 15px;
  top: 15px;
  color: #10307d;
  background: #fff;
  border-radius: 8px;
  font-weight: 700;
`;
