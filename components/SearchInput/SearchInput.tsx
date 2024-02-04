'use client'

// types
import { FormEvent, ReactElement, } from 'react'

// styles
import '@/styles/components/SearchInput/SearchInput.scss'

// components
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import Image from 'next/image'

// hooks
import { useState, useEffect } from 'react'
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const SearchInput = (): ReactElement => {
	const searchParams: ReadonlyURLSearchParams = useSearchParams()
	const searchUsed = searchParams.get('search') || ''
	const [search, setSearch] = useState<string>(searchUsed)
	const [showHelperText, setShowHelperText] = useState(false)
	const router = useRouter()

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!search) {
			router.push('/')
			return
		}

		router.push(`/?search=${search.trim().replaceAll(' ', '%20')}`)
	}

	useEffect(() => {
		setShowHelperText(!!searchUsed)
		setSearch(searchUsed)
	}, [searchParams, searchUsed])

	return (
		<div className="search-field">
			<Paper
				className="search-input"
				onSubmit={ handleSearch }
				component="form"
				sx={{ m: 'auto', display: 'flex', alignItems: 'center', width: '90%' }}
			>
				<div className="locationIcon">
					<Image src="/imgs/location.png" alt="location" width={ 24 } height={ 24 } />
				</div>
				<InputBase
					data-cy="search-input"
					value={ search }
					onChange={ (e) => setSearch(e.target.value) }
					sx={{ ml: 1, flex: 1, borderRadius: '0' }}
					placeholder="Busque por atração"
					inputProps={{ 'aria-label': 'search google maps' }}
				/>
				<Divider sx={{ height: 46 }} orientation="vertical" />
				<button
					type="submit"
					className="search-icon"
					data-cy="search-submit-button"
					onClick={ () => handleSearch }
				>
					<Image src="/imgs/search.png" alt="search" width={ 24 } height={ 24 } />
				</button>
			</Paper>
			{showHelperText && (
				<>
					<span className="helper-text">
                    Filtrando ingressos pela busca &quot;{searchUsed}&quot;. <Link href="/">Clique aqui para limpar o filtro.</Link>
					</span>
				</>
			)}
		</div>
	)
}

export default SearchInput