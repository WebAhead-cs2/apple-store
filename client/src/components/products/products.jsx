import React from "react";
import { useState } from "react";
import "./products.css";
// import Search from "./searchBox";
export default function Products() {
  const [list, setList] = React.useState([]);
  const [isDescriptionVisible, setDescriptionVisibility] = useState(false);
  const [activeProductId, setActiveProductId] = useState(null);

  const toggleDescriptionVisibility = (productId) => {
    setActiveProductId(productId);
    setDescriptionVisibility(!isDescriptionVisible);
  };
  const Data = async () => {
    try {
      let res = await fetch("products");
      let resj = await res.json();
      console.log(resj);
      setList(resj);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("Test1", list);

  React.useEffect(() => {
    Data();
  }, []);
  console.log(list);
  return (
    <div>
      <h1>Our Products</h1>
      {/* <Search data ={ list.name}/><br/><br/><br/> */}
      <div className="container">
        {list.map((e) => (
          <div className={`card ${isDescriptionVisible ? "expanded" : ""}`}>
            <div key={e.id}>
              <div>
                <br />
                <br />
                <img src={e.image} alt="rel" />
              </div>

              <div>
                <h4>{e.name}</h4>
                <h4>{e.model}</h4>
                <h4>{e.price} NIS</h4>

                <button onClick={() => toggleDescriptionVisibility(e.id)}>
                  See more
                </button>
                {activeProductId === e.id && isDescriptionVisible && (
                  <div
                    className={`product-description ${
                      isDescriptionVisible ? "visible" : ""
                    }`}
                  >
                    <p>{e.description}</p>
                    <button onClick={() => toggleDescriptionVisibility(e.id)}>
                      Add To Cart +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
