import { X } from "phosphor-react";
import { ImageContainer, ShoppingBagContainer, ProductDatails, ProductContainer, CloseContainer } from "./styles";

interface ProductProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: string
        defaultPriceId: string
    }
}

interface ShoppingBagProps {
    asideShow: () => void
}

export function ShoppingBag({ asideShow }: ShoppingBagProps) {




    return (
        <ShoppingBagContainer>
                <h1>Sacola de Compras</h1>

            <ProductContainer>
                <CloseContainer onClick={asideShow}>
                    <X size={24} weight="bold" />
                </CloseContainer>

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