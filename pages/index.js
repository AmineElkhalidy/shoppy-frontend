import Featured from "@/components/Featured";
import NewProducts from "@/components/NewProducts";
import Header from "@/components/Header";
import Head from "next/head";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import styled from "styled-components";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Shoppy | E-commerce Web Application</title>
        <meta
          name="description"
          content="The Front End Part of Shoppy E-commerce Web Application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Featured />
        <NewProducts products={products} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {
    sort: {
      _id: -1,
    },
    limit: 10,
  });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
