import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import React, { useContext } from "react";
import Head from "next/head";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { CartContext } from "@/components/CartContext";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  margin-top: 40px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Price = styled.span`
  font-size: 1.5rem;
`;

const ProductPage = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <Head>
        <title>Shoppy - {product.title}</title>
      </Head>
      <Header />
      <Center>
        <Title>Product Info</Title>

        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product?.images} />
          </WhiteBox>

          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <h3>
                <Price>${product.price}</Price>
              </h3>
              <div>
                <Button primary onClick={() => addProduct(product._id)}>
                  <CartIcon /> Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
};

export default ProductPage;

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
