import { ReactElement } from 'react'

// Logo
import logo from "@/public/imgs/logo.jpg"

// styles
import "@/styles/Header.scss"

// Components
import Image from 'next/image'
import DollarExchangeRate from '@/components/DollarExchangeRate/DollarExchangeRate'

const Header = (): ReactElement => {
    const cartCount = 0

    return (
        <header className="header">
            <div className="logo">
                <Image height={ 30 } width={ 130 } alt="logo" src={ logo }/>
            </div>
            <div className="container">
                <DollarExchangeRate />
                <div className="log-in-button">
                    <Image height={ 24 } width={ 24 } alt="log-in" src="/imgs/user.svg" />
                    <span className="log-in-button-label">Entrar</span>
                </div>
                <div className="cart-button">
                    <Image height={ 24 } width={ 24 } alt="cart" src="/imgs/cart.svg" />
                    <span className="cart-button-label">{ cartCount }</span>
                </div>
            </div>
        </header>
    )
}

export default Header