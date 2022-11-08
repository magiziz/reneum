import React from "react";
import * as S from "./styles";
import Results from "../../components/Results";
import Sidebar from "../../components/Sidebar";

// Home View component
// Being used in /pages/index.js as a home page
const HomeView = () => {
  return (
    <S.HomeFullScreen>
      <S.OverviewFlexBox>
        <Sidebar />
        <Results />
      </S.OverviewFlexBox>
    </S.HomeFullScreen>
  );
};

export default HomeView;
