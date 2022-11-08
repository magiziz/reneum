import React, { useState } from "react";
import { Collapse } from "react-collapse";
import ListCategory from "../ListCategory";
import * as S from "./styles";
import { ArrowDown, ArrowUp } from "react-feather";

const ListCollapse = ({
  listName,
  lists,
  technology,
  price,
  location,
  onChangeCategory,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <S.ListCollapse>
      <S.ListFlex onClick={() => setOpen(!open)}>
        <S.List>{listName}</S.List>
        {open ? <ArrowDown /> : <ArrowUp />}
      </S.ListFlex>

      <Collapse isOpened={open} transition={250}>
        {lists.map(({ name, value }) => {
          return (
            <ListCategory
              key={name}
              listName={listName}
              name={name}
              value={value}
              technology={technology}
              price={price}
              location={location}
              onChangeCategory={onChangeCategory}
            />
          );
        })}
      </Collapse>
    </S.ListCollapse>
  );
};

export default ListCollapse;
