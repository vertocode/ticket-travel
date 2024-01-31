import {ReactElement} from 'react'

// images
import support from '@/public/imgs/support.svg'

// styles
import '@/styles/components/Header/DollarExchangeRate/DollarExchangeRate.scss'

// components
import Image from 'next/image'

const getDollarExchangeRate = async (): Promise<number> => {
    try {
        const apiKey = process.env.EXCHANGE_RATE_API_KEY
        if (!apiKey) return 0

        const response = await fetch(
            `https://open.er-api.com/v6/latest/USD?apikey=${apiKey}`,
            {
                next: {
                    revalidate: 60 * 60 // This data will be revalidated every 1 hour.
                }
            }
        );

        if (response.ok) {
            const data = await response.json();
            return data.rates.BRL
        } else {
            console.error('Error to get the tax.');
            return 0
        }
    } catch (error) {
        console.error('Error to process the request', error);
        return 0
    }
}

const DollarExchangeRate = async (): Promise<ReactElement> => {
    const exchangeRate = await getDollarExchangeRate()

    return (
        <div className="dollar-exchange-rate">
            <span>Cotação dólar hoje: R${ exchangeRate ? exchangeRate.toLocaleString('pt-BR') : '5,53' }</span>
            <Image src="/imgs/brazil.jpg" alt="brasil" width={ 30 } height={ 20 }/>
            <Image className="support-icon" src={ support } alt="support" width={ 24 } height={ 24 }/>
        </div>
    )
}

export default DollarExchangeRate