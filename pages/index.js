
import Head from 'next/head';
import Link from 'next/link';
import { getProducts } from '../lib/products';

export async function getStaticProps(){
  const products = await getProducts()
  return {
    props: {products},
    revalidate: 5 * 60,
  }
}

function HomePage({ products }) {
  console.log('Homepage rneder :', products)
  return (
    <>
    <Head>
      <title>Next shop</title>
    </Head>
    <main className="px-5 py-4">
      <h1 className="text-red-400 py-12">Next Shop</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
            <Link href={`products/${product.id}`}>
              {product.title}
              </Link>
            </li>
          ))}
        </ul>
    </main>
    </>
  );
}

export default HomePage;
