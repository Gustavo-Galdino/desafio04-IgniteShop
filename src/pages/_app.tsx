import { AppProps } from "next/app";
import { Container, Header } from "../styles/pages/app";

import { globalStyles } from "../styles/global";

import { CartProvider } from "use-shopping-cart";
import { HeaderComponent } from "../components/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
        <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe='pk_test_51MfPYKGWeGdHMwwD9ITaayHgVxgYELEmYd3TKPAQtTcDT9yvZUHXNtzCVVuM7UlcE2hy5rDavz8X5VHmd1Nzf8OW001bdkJwKa'
          successUrl="http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}"
          cancelUrl={process.env.NEXT_URL!}
          currency="BRL"
          billingAddressCollection={true}
          shouldPersist={true}
      >
          <Container>
            <Header>
              <HeaderComponent />
            </Header>
            <Component {...pageProps} />
          </Container>

      </CartProvider>
    </>

  )
}
