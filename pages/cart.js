import { useQuery } from 'react-query';
import CartItem from '../components/CartItem';
import Page from '../components/Page';
import { fetchJson } from '../lib/api';

const CartPage = () => {
   const query = useQuery('cartItmes', ()=> fetchJson('api/cart'));
   const cartItems = query.data;
    
   console.log('cartItems :', cartItems)

  return (
      <Page title="cart">
        {cartItems ? cartItems.map(cartItem => (<CartItem key={cartItem.id} cartItem={cartItem} />)) : 
        <p className="text-lg text-center">Cart is Empty</p>
        }
      </Page>
  )
};

export default CartPage;
