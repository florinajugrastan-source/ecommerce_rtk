import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Assuming you have action creators for increasing and decreasing item quantity


const ShoppingCart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleAddItem = itemId => {
    dispatch(addItemToCart(itemId));
  };

  const handleRemoveItem = itemId => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = itemId => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseItemQuantity(itemId));
  };


  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
        {item.name} - ${item.price}
        <button onClick={() => handleDecreaseQuantity(item.id)}>- {item.quantity} <button onClick={() => handleIncreaseQuantity(item.id)}>+
        <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove
        ))}
        <button classname="clear-cart-btn" onclick="{handleClearCart}">Clear Cart</button>
        {totalAmount ?
        'The total amount is {totalAmount}
        : ''}  

      </ul>
      <button className="clear-cart-btn">Clear Cart</button>
    </div>
  
    </>
  );
};

export default ShoppingCart;
