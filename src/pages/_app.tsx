import { AppProps } from "next/app";
import { Container, Header } from "../styles/pages/app";

import { globalStyles } from "../styles/global";

import { CartProvider } from "use-shopping-cart";
import { ShoppingBagProvider } from "../context/ShoppingBag";
import { HeaderComponent } from "../components/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
        <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={process.env.STRIPE_PUBLIC_KEY!}
          successUrl={process.env.NEXT_URL_SUCESS!}
          cancelUrl={process.env.NEXT_URL!}
          currency="BRL"
          billingAddressCollection={true}
          shouldPersist={true}
      >
        <ShoppingBagProvider>

          <Container>
            <Header>
              <HeaderComponent />
            </Header>
            <Component {...pageProps} />
          </Container>
        </ShoppingBagProvider>

      </CartProvider>
    </>

  )
}
