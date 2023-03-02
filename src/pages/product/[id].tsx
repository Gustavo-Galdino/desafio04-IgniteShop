import { stripe } from "@/src/lib/stripe";
import { ImageContainer, ProductContainer, ProductDatails, ShoppingBagContainer } from "@/src/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

interface ProductProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: number
        description: string
        defaultPriceId: string
        currency: string
        sku: string
        formattedPrice: number
        planId: string
    }
}

export default function Product({ product }: ProductProps) {
    const { isFallback } = useRouter()
    const { addItem } = useShoppingCart()

    if (isFallback) {
        return <p>Loading...</p>
    }

    return (
        <>
        <Head>
            <title>{product.name} | Ignite Shop</title>
        </Head>
      
        <ProductContainer> 
            <ImageContainer>
                <Image src={product.imageUrl} width={520} height={480} alt='' />
            </ImageContainer>

            <ProductDatails>
                <h1>{product.name}</h1>
                <span>R$ {(product.price / 100).toFixed(2)}</span>
                <p>{product.description}</p>

                <button 
                onClick={() => {
                        addItem(product)
                }}
                >
                    Colocar na sacola
                </button>
            </ProductDatails>
        </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_NQGDeDszUlncx2'}}
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params!.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: price.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount!,
                description: product.description,
                defaultPriceId: price.id,
                currency: price.currency,
                sku: price,
                formattedPrice: price.unit_amount!,
                planId: price.id,
            }
        },
        revalidate: 60 * 60 * 1,
    }
}