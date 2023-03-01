import { ShoppingBagContext } from "@/src/context/ShoppingBag";
import Image from "next/image";
import { Handbag } from 'phosphor-react'
import { useContext, useState } from "react";
import logoImg from '../../assets/logo.svg'
import { ShoppingBag } from "../shopping-bag";


export function HeaderComponent() {
    const [showAsideShoppingBag, setAsideShoppingBag] = useState(false)
    const { cartCount } = useContext(ShoppingBagContext)


    return (
        <>
            <Image src={logoImg} alt="" />
            <span onClick={() => setAsideShoppingBag(!showAsideShoppingBag)}>
            <Handbag size={24} weight="bold" />
            <p>{cartCount}</p>
            </span>
            {showAsideShoppingBag && (
            <ShoppingBag />
            )}
        </>
    )
}