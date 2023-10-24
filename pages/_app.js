import { Rubik } from "next/font/google";
import { createGlobalStyle } from "styled-components";
import { CartContextProvider, CartContext } from "@/components/CartContext";

const rubik = Rubik({ subsets: ["latin"] });
const GlobalStyles = createGlobalStyle`
body{
  padding: 0;
  margin: 0;
  background-color: #eee;
}`;

export default function App({ Component, pageProps }) {
  return (
    <main className={rubik.className}>
      <GlobalStyles />
      <CartContextProvider value={CartContext}>
        <Component {...pageProps} />
      </CartContextProvider>
    </main>
  );
}
