import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 1rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured() {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>MacBook 14 Pro</Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus magnam est saepe sit corporis ut. Unde incidunt porro
                commodi laudantium quas eos nisi corporis animi minima quia iure
                veritatis quis, quaerat, magni eius itaque impedit fuga tempora
                ipsam deleniti nihil iste amet maiores numquam! Dolores quod
                commodi reiciendis. Totam, impedit.
              </Desc>
              <ButtonsWrapper>
                <ButtonLink href={"/products"} outline={1} white={1}>
                  Read more
                </ButtonLink>
                <Button white onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img
              src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png"
              alt="Macbook 14 Pro"
            />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
