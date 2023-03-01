import { stripe } from "@/src/lib/stripe";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useState } from "react";
import Stripe from "stripe";
import { ImageContainer, ShoppingBagContainer, ProductDatails, ProductContainer } from "./styles";

interface ProductProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: string
        defaultPriceId: string
    }
}

export function ShoppingBag() {




    return (
        <ShoppingBagContainer> 
            <h1>Sacola de Compras</h1>

            <ProductContainer>
                <ImageContainer>
                    
                    </ImageContainer>
                    <ProductDatails>
                        <h2>NOME PRODUTO</h2>
                        <span>R$ 79,90</span>
                        <button>Remover</button>
                    </ProductDatails>

                    <ImageContainer>
                    
                    </ImageContainer>
                    <ProductDatails>
                        <h2>NOME PRODUTO</h2>
                        <span>R$ 79,90</span>
                        <button>Remover</button>
                    </ProductDatails>

                    <ImageContainer>
                    
                    </ImageContainer>
                    <ProductDatails>
                        <h2>NOME PRODUTO</h2>
                        <span>R$ 79,90</span>
                        <button>Remover</button>
                    </ProductDatails>

            </ProductContainer>
            <div>
                <div>
                    <p>Quantidade <span>3 itens</span></p>
                    <p>Valor total <strong>R$ 270,00</strong></p>
                </div>
                <button>Finalizar compra</button>
            </div>
        </ShoppingBagContainer>


    )
}