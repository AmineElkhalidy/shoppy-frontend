import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: 600;
`;

const Container = styled.div`
  padding-bottom: 3rem;
`;

export default function NewProducts({ products }) {
  return (
    <Container>
      <Center>
        <Title>New Arrivals</Title>
        <ProductsGrid products={products} />
      </Center>
    </Container>
  );
}
