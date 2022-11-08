import React, { useState } from "react";
import * as S from "./styles";
import Results from "../../components/Results";
import Sidebar from "../../components/Sidebar";
import { dummyData } from "../../helpers";

// Home View component
// Being used in /pages/index.js as a home page
const HomeView = () => {
  // useState react hooks
  // We will use these states to see what list to filter
  const [technology, setTechnology] = useState([]);
  const [location, setLocation] = useState([]);
  const [price, setPrice] = useState([]);

  // Check if location exist remove it or add one
  const setLocationCheck = (value) => {
    let results = location;
    const isCheckedLocation = location.includes(value);

    // If results exist remove it otherwise add it
    if (isCheckedLocation) {
      results = results.filter((result) => result !== value);
    } else {
      results = [...results, value];
    }

    // setState
    setLocation(results);
  };

  // Check if technology exist if remove it or add one
  const setTechnologyCheck = (value) => {
    let results = technology;
    const isCheckedTechnology = technology.includes(value);

    // If results exist remove it otherwise add it
    if (isCheckedTechnology) {
      results = technology.filter((result) => result !== value);
    } else {
      results = [...technology, value];
    }

    // setState
    setTechnology(results);
  };

  // Check if price exist if remove it or add one
  const setPriceCheck = (value) => {
    let results = price;
    const isCheckedPrice = value.every((val) => price.includes(val));

    // If results exist remove it otherwise add it
    if (isCheckedPrice) {
      results = [];
    } else {
      results = [...value];
    }

    // setState
    setPrice(results);
  };

  // onChangeCategory function
  const onChangeCategory = (listName, value) => {
    if (listName === "price") {
      setPriceCheck(value);
    } else if (listName === "technology") {
      setTechnologyCheck(value);
    } else if (listName === "location") {
      setLocationCheck(value);
    }
  };

  // This is the filteredData we will be using
  // It filters items based on our states that we updaste
  const filteredData = dummyData
    .filter((data) =>
      location.length ? location.includes(data.location) : data
    )
    .filter((data) =>
      technology.length ? technology.includes(data.type) : data
    )
    .filter((data) =>
      price.length
        ? price.length === 1
          ? data.price >= price[0]
          : data.price >= price[0] && data.price <= price[1]
        : data
    );

  return (
    <S.HomeFullScreen>
      <S.OverviewFlexBox>
        <Sidebar
          technology={technology}
          price={price}
          location={location}
          onChangeCategory={onChangeCategory}
        />
        <Results data={filteredData} />
      </S.OverviewFlexBox>
    </S.HomeFullScreen>
  );
};

export default HomeView;
