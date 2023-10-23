import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
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
        {/* <Featured product={featuredProduct} /> */}
        {/* <NewProducts products={newProducts} /> */}
      </main>
    </>
  );
}

// export async function getServerSideProps() {
//   const featuredProductID = "";
//   await mongooseConnect();
//   const featuredProduct = await Product.findById(featuredProductID);
//   const newProducts = await Product.find({}, null, {
//     sort: {
//       _id: -1,
//     },
//     limit: 10,
//   });
//   return {
//     props: {
//       featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
//       newProducts: JSON.parse(JSON.stringify(newProducts)),
//     },
//   };
// }
