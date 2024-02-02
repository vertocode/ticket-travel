import { ReadonlyURLSearchParams, useRouter, useSearchParams } from 'next/navigation'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { fetchAllTickets } from '@/services/fetchTickets'

export const usePagination = () => {
	const searchParams: ReadonlyURLSearchParams = useSearchParams()
	const [isExpanded, setIsExpanded] = useState(false)

	const [count, setCount] = useState(20)
	const page = parseInt(searchParams.get('page') || '1', 10)

	const countPages = useCallback(() => {
		return Math.ceil(count / 6)
	}, [count])

	useEffect(() => {
		const getCountTickets = async () => {
			// The best way to get the number of tickets would be to have a query just for that, but since I don't have
			// one, I'm using the one that gets all the tickets to find out how many tickets I have.
			const tickets =  await fetchAllTickets()
			setCount(tickets.length)
		}
		getCountTickets()
	}, [searchParams])

	return {
		countPages,
		page,
		isExpanded,
		setIsExpanded,
		count
	}
}