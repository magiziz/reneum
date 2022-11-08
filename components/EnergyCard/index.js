import React from "react";
import * as S from "./styles";
import { AtSign } from "react-feather";

const EnergyCard = ({ location, type, price, index }) => {
  return (
    <S.Card>
      <S.CardImage
        imageUrl={
          "https://assets.entrepreneur.com/content/3x2/2000/1594363928-panel-2562239.jpg"
        }
      >
        <S.CardPrice>${price}</S.CardPrice>
      </S.CardImage>
      <S.CardName>Reneum Solar {index + 1}</S.CardName>
      <S.CardLocation>{location}</S.CardLocation>
      <S.CardType>
        <AtSign size={15} />
        {type}
      </S.CardType>
    </S.Card>
  );
};

export default EnergyCard;
