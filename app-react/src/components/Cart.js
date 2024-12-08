import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Bolsa de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
