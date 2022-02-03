
import Head from 'next/head';

function HomePage({ products }) {
  return (
    <>
    <Head>
      <title>Next shop</title>
    </Head>
    <main>
      <h1 className='text-blue-400 px-6'>
        Next shop
      </h1>
    </main>
    </>
  );
}

export default HomePage;
