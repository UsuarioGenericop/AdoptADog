import React from "react";
const Producto = () => {
  const productName = "Producto 1";
  return (
    <>
      <h1> {productName} </h1>
      <p>Operaciones matemática Suma: {2 + 2}</p>
      <p>Operaciones matemática Resta: {2 - 2}</p>
      <p>Operaciones matemática Multiplicación: {2 * 2}</p>
      <p>Operaciones matemática División: {2 / 2}</p>
      <p>Operaciones matemática Módulo: {2 % 2}</p>
    </>
  );
};
export default Producto;
