import React from "react";

function Filter({ list, setList }) {
  const [minPrice, setMinPrice] = React.useState("0");
  const [maxPrice, setMaxPrice] = React.useState("5500");
  const [type, setType] = React.useState("all");

  function handleMinPriceChange(event) {
    setMinPrice(event.target.value);
  }

  function handleMaxPriceChange(event) {
    setMaxPrice(event.target.value);
  }

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  React.useEffect(() => {
    let filteredList = list;

    if (minPrice) {
      filteredList = filteredList.filter((product) => +product.price >= +minPrice);
    }

    if (maxPrice) {
      filteredList = filteredList.filter((product) => +product.price <= +maxPrice);
    }

    if (type !== "all") {
      filteredList = filteredList.filter((product) => product.type === type);
    }

    setList(filteredList);
  }, [minPrice, maxPrice, type, list, setList]);

  return (
    <form>
      <label>
        Min price:
        <input
          type="range"
          id="min-price"
          min="0"
          max="5500"
          step="10"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
      </label>
      <label>
        Max price:
        <input
          type="range"
          id="min-price"
          min="0"
          max="5500"
          step="10"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </label>
      <label>
        Type:
        <select value={type} onChange={handleTypeChange}>
          <option value="all">All</option>
          <option value="iphone">iPhone</option>
          <option value="ipad">iPad</option>
          <option value="airpods">AirPods</option>
        </select>
      </label>
    </form>
  );
}

export default Filter;
