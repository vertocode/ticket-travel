import { ReactElement } from 'react'

// Logo
import logo from '@/public/imgs/logo.jpg'

// styles
import '@/styles/components/Header/Header.scss'

// Components
import Image from 'next/image'
import Link from 'next/link'
import DollarExchangeRate from '@/components/Header/DollarExchangeRate/DollarExchangeRate'
import CartButton from '@/components/CartButton/CartButton'

const Header = (): ReactElement => {
	return (
		<header className="header">
			<div className="header-content">
				<Link href="/" className="logo">
					<Image height={ 30 } width={ 130 } alt="logo" src={ logo }/>
				</Link>
				<div className="container">
					<DollarExchangeRate />
					<div className="log-in-button">
						<Image height={ 24 } width={ 24 } alt="log-in" src="/imgs/user.svg" />
						<span className="log-in-button-label">Entrar</span>
					</div>
					<CartButton />
				</div>
			</div>
		</header>
	)
}

export default Header