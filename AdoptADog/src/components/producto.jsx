import React from "react";
const Producto = ({ title, price }) => {
  return (
    <>
      <h1 className="producto">{title}</h1>
      <p>Precio: {price}</p>
    </>
  );
};
export default Producto;
