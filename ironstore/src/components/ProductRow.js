import React from "react";

const ProductRow = props => {
  const color = props.product.stocked ? "black" : "red";
  return (
    <tr>
      <td style={{ color: color }}>{props.product.name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
};

export default ProductRow;
