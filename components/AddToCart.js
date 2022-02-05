import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { fetchJson } from '../lib/api';
import Button from './Button';

const AddToCart = ({productId}) => {
    const [quantity, setQuantity] = useState(1);
    const router = useRouter();
    const mutation = useMutation(()=> 
        fetchJson('/api/cart', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, quantity}),
        }));

    const onSubmit = async (e)=> {
        e.preventDefault();
        await mutation.mutateAsync();
        router.push('/cart');
    }

  return (
      <form onSubmit={onSubmit} className='my-2'>
          <input type="number" min='1' value={quantity.toString()} onChange={event => setQuantity(parseInt(event.target.value))} className='border rounded px-3 text-right w-16 mr-2 py-2'/>
          {mutation.isLoading ? (
            <p className='text-center text-blue-700'>Loading ...</p>
          ): 
          <Button>
              Add to Cart
          </Button>
          }
          
      </form>
  );
};

export default AddToCart;
