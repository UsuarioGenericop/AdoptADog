import React from "react";
const Producto = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>Precio: {props.price}</p>
    </>
  );
};
export default Producto;
