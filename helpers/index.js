export const lists = [
  {
    name: "technology",
    lists: [
      { name: "Solar", value: "solar" },
      { name: "Hydro-Electric", value: "electric" },
      { name: "Wind", value: "wind" },
    ],
  },
  {
    name: "location",
    lists: [
      { name: "Argentina", value: "argentina" },
      { name: "Pakistan", value: "pakistan" },
      { name: "India", value: "india" },
    ],
  },
  {
    name: "price",
    lists: [
      { name: "$500 - $1000", value: [500, 1000] },
      { name: "$1000 - $2000", value: [1000, 2000] },
      { name: "$3000+", value: [3000] },
    ],
  },
];

export const dummyData = [
  { location: "argentina", type: "solar", price: 500 },
  { location: "india", type: "electric", price: 1000 },
  { location: "pakistan", type: "solar", price: 2000 },
  { location: "argentina", type: "electric", price: 500 },
  { location: "india", type: "wind", price: 3000 },
  { location: "pakistan", type: "solar", price: 3250 },
  { location: "argentina", type: "wind", price: 853 },
  { location: "india", type: "wind", price: 1250 },
  { location: "pakistan", type: "solar", price: 3500 },
];
