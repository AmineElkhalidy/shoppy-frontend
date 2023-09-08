import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Head from "next/head";

export default function Home({ featuredProduct, newProducts }) {
  return (
    <>
      <Head>
        <title>Shoppy | e-commerce web application</title>
        <meta
          name="description"
          content="Shoppy is an e-commerce web application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* <Featured product={featuredProduct} /> */}
        <NewProducts products={newProducts} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductID = "";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductID);
  const newProducts = await Product.find({}, null, {
    sort: {
      _id: -1,
    },
    limit: 10,
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
