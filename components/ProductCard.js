import Link from 'next/link';
import Image from 'next/image';

function ProductCard({product}){
    return ( 
        <div className="border my-4 w-80 shadow hover:shadow-x mx-auto"> 
            <Link href={`/products/${product.id}`}>
              <a>
              <Image src={product.imageUrl} width={320} height={240} alt={product.title} />
              <div className="p-2 flex justify-between items-baseline">
                  <h2 className='text-lg font-bold '>
                    {product.title}
                  </h2>
                  <span>
                      {product.price}
                  </span>
              </div>
              </a>
            </Link>
        </div>
    ) 
}

export default ProductCard;