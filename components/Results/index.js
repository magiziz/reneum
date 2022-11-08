import React from "react";
import * as S from "./styles";
import EnergyCard from "../EnergyCard";

const Results = ({ data }) => {
  return (
    <S.OverviewResults>
      {data.length ? (
        data.map(({ location, type, price }, index) => (
          <EnergyCard
            key={index}
            index={index}
            location={location}
            type={type}
            price={price}
          />
        ))
      ) : (
        <S.NotFound>Sorry the cards you filtered does not exist</S.NotFound>
      )}
    </S.OverviewResults>
  );
};

export default Results;
