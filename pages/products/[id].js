import Head from 'next/head';
import { getProduct, getProducts } from '../../lib/products';

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
            revalidate: 5 * 60,
        }    
    } catch (error) {
        return {notFound : true}
    }
    
}

const ProductPage = ({product}) => {
  return (
    <>
    <Head>
      <title>Next shop</title>
    </Head>
    <main className="px-5 py-4">
      <h1 className="text-red-400 py-12">{product.title}</h1>
       <p>{product.description}</p>
       <p>{product.price}</p>
    </main>
    </>
  )
};

export default ProductPage;
