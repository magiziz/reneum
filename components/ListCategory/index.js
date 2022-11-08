import React from "react";
import * as S from "./styles";

const ListCategory = ({
  listName,
  name,
  value,
  onChangeCategory,
  technology,
  price,
  location,
}) => {
  const isChecked =
    listName === "price"
      ? value.every((val) => price.includes(val))
      : listName === "technology"
      ? technology.includes(value)
      : listName === "location"
      ? location.includes(value)
      : false;

  return (
    <S.Category>
      <S.ListInput
        type="checkbox"
        id={value}
        name={value}
        onChange={() => onChangeCategory(listName, value)}
        checked={isChecked}
      />
      <S.ListLabel htmlFor={value}>{name}</S.ListLabel>
    </S.Category>
  );
};

export default ListCategory;
