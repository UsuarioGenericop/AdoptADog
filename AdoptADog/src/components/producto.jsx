import React from "react";
const Producto = ({ title = "Título por defecto", price = "1000", stock }) => {
  return (
    <>
      <p className={stock <= 0 ? "sinStock" : null}>
        {" "}
        {title} - Precio: {price} <span>stock: {stock}</span>
      </p>
    </>
  );
};
export default Producto;
