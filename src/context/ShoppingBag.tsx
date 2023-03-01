import { createContext, ReactNode, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";

interface ShoppingBagContextType {
    addItem: (product: Product) => void
    cartCount: number | undefined

}

export const ShoppingBagContext = createContext({} as ShoppingBagContextType)

interface ShoppingBagProps {
    children: ReactNode
}

export function ShoppingBagProvider({children}: ShoppingBagProps) {
    const { addItem, cartCount } = useShoppingCart()

    return (
        <ShoppingBagContext.Provider value={{addItem, cartCount}}>
            {children}
        </ShoppingBagContext.Provider>
    )
}