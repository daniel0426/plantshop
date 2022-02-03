import { ApiError } from '../../lib/api';
import { getProduct, getProducts } from '../../lib/products';
import Image from 'next/image';
import Page from '../../components/Page';

export async function getStaticPaths() {
    const products = await getProducts();

    return {
        paths: products.map(product => ({
            params: {id: product.id.toString()}
        })),
        fallback: 'blocking'
    }
}

export async function getStaticProps({params: {id}}){
    try {
        const product = await getProduct(id);
        return {
            props: {product},
            revalidate: parseInt(process.env.REVALIDATE_SECONDS),
        }    
    } catch (error) {
        if(error instanceof ApiError && error.status === 404){
            return {notFound : true}
        }
        throw error;
    }
    
}

const ProductPage = ({product}) => {
  return (
    <Page title={product.title}>
      <div className='flex flex-col md:flex-row md:w-3/4 lg:w-1/2 md:mx-auto'>
        <div className='mb-8'>
            <Image src={product.imageUrl} width={320} height={240} alt={product.title} />
        </div>
        <div className='flex-1 md:ml-4'>
            <p className='mb-8'>{product.description}</p>
            <p className='text-lg'>price : {product.price}</p>
       </div>
      </div>
    </Page>
  )
};

export default ProductPage;
