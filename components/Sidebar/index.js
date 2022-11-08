import React from "react";
import * as S from "./styles";
import { lists } from "../../helpers";
import ListCollapse from "../ListCollapse";

// Sidebar component
const Sidebar = ({ technology, price, location, onChangeCategory }) => {
  return (
    <S.Sidebar>
      {lists.map(({ name, lists }) => (
        <ListCollapse
          key={name}
          technology={technology}
          price={price}
          location={location}
          listName={name}
          lists={lists}
          onChangeCategory={onChangeCategory}
        />
      ))}
    </S.Sidebar>
  );
};

export default Sidebar;
