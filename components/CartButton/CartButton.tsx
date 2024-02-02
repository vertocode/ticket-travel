'use client'
import { ReactElement } from 'react'
import Image from 'next/image'

// styles
import '@/styles/components/CartButton/CartButton.scss'

// components
import CartMenu from '@/components/CartButton/CartMenu/CartMenu'
import { useAppSelector } from '@/lib/hooks'

// hooks
import { useState } from 'react'

// types
import { TicketCart } from '@/types/CartState'

// selectors
import { tickets } from '@/lib/features/cart/cartSelectors'

const CartButton = (): ReactElement => {
	const [showMenu, setShowMenu] = useState(false)
	const cartTickets: TicketCart[] = useAppSelector(tickets)

	return (
		<div className="cart-button">
			<div onClick={ () => setShowMenu(!showMenu) } className="cart-button-action">
				<Image height={ 24 } width={ 24 } alt="cart" src="/imgs/cart.svg" />
				<span
					className="cart-button-action-label"
					data-testid="cart-button-action-label"
				>{ cartTickets.length }
				</span>
			</div>

			{ showMenu && <CartMenu tickets={ cartTickets }/> }
		</div>
	)
}

export default CartButton