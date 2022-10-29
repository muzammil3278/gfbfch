import { createClient } from "next-sanity";

import Link from 'next/link';

const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Link href={`/product/ssr/${product.slug}`} >
            <p>{product.title}</p>
       </Link>
      ))}
    </div>
  );
};

export default Products;
const client = createClient({
    projectId: "pgmavw8h",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: false,
  });
export async function getStaticProps() {
    const products = await client.fetch(`*[_type == "product"]`);
  
    return {
      props: {
        products,
      },
    };
  }