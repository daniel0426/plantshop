import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

const Page = ({title, children}) => {
    return (
        <>
        <Head>
          <title>{title} - Next Shop</title>
        </Head>
        <main className="px-5 py-4">
        <header>
          <Navbar />
        </header>
          <h1 className="text-green-600 text-2xl py-12 text-center">{title}</h1> 
           {children} 
        </main>
        </>
      );
};

export default Page;
