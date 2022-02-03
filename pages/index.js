import Page from '../components/Page';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../lib/products';

export async function getStaticProps(){
  const products = await getProducts()
  return {
    props: {products},
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  }
}

function HomePage({ products }) {
  console.log('Homepage rneder :', products)
  return (
    <Page title="Indoor Plants">
        <ul className='grid md:grid-cols-2 lg:grid-cols-3 mx-auto w-full gap-4 '>
          {products.map(product => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
    </Page>
  );
}

export default HomePage;
