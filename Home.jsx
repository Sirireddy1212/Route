// import { Outlet } from "react-router-dom";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [productDetails, setProductDetails] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  //GET request using fetch

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [id]);

  //post request using fetch
  const addProduct = () => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: productDetails.title,
        price: 15,
        description: "new product",
        category: "new product",
        image:
          "http://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      }),
      headers: {
        "Content-Type": "application/json ; charset= UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setData([...data, json]));
  };

  //delete request using fetch
  const deleteProduct = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  //PUTor Update  request using fetch
  const updateProduct = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: productDetails.title,
        price: 15,
        description: "new product",
        category: "new Product",
        image: "image",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <img
              style={{ width: "50px", height: "50px" }}
              src={item.image}
              alt=""
            />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <button
              onClick={() => {
                deleteProduct(item.id);
                setId(item.id);
              }}
            >
              delete
            </button>
            <button
              onClick={() => {
                updateProduct(item.id);
                setId(item.id);
              }}
            >
              Update
            </button>
            <button>Add to cart</button>
          </div>
        );
      })}

      <button onClick={addProduct}>Add Product</button>
      <input
        type="text"
        value={productDetails.title}
        onChange={(e) =>
          setProductDetails({ ...productDetails, title: e.target.value })
        }
      />

      {/* <Outlet /> */}
    </div>
  );
}

//post request using Fetch
// fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1,
//         des: "ur good",
//       }),
//       headers: {
//         "Content-Type": "application/json ; charset= UTF-8",
//       },
//     })
//       .then((response) => {
//         console.log(response);
//         return response.json();
//       })
//       .then((json) => console.log(json));
