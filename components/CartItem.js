import React from 'react';

const CartItem = ({cartItem}) => {
    console.log('cartItem component')
    const total = cartItem.product.price * cartItem.quantity;
  return (
      <ul className="flex w-2/3 justify-evenly mx-auto">
          <li>{cartItem.product.title}</li>
          <li>$ {cartItem.product.price.toFixed(2)}</li>
          <li>{cartItem.quantity}</li>
          <li>$ {total.toFixed(2)}</li>
      </ul>
  );
};

export default CartItem;
