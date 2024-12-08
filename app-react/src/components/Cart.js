import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Bolsa de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.src} alt={item.alt} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
