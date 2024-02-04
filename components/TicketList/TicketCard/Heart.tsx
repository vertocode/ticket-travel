'use client'
import { ReactElement, useState } from 'react'
import Image from 'next/image'

// images
import heartImg from '@/public/imgs/heart.svg'
import heartFilledImg from '@/public/imgs/heart-filled.svg'

const Heart = (): ReactElement => {
	const [isLiked, setIsLiked] = useState(false)

	return (
		<Image
			priority={ true }
			onClick={() => setIsLiked(!isLiked)}
			className="ticket-image-heart"
			width={ 30 }
			height={ 30 }
			src={isLiked ? heartFilledImg : heartImg }
			alt="heart"
		/>
	)
}

export default Heart