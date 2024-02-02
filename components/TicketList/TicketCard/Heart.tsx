'use client'
import {ReactElement, useState} from 'react'
import Image from "next/image";

const Heart = (): ReactElement => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <Image
            onClick={() => setIsLiked(!isLiked)}
            className="ticket-image-heart"
            width={ 30 }
            height={ 30 }
            src={isLiked ? "/imgs/heart-filled.svg" : "/imgs/heart.svg"}
            alt="heart"
        />
    )
}

export default Heart