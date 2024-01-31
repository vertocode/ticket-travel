import { ReactElement } from 'react'

import "@/styles/components/SearchInput/SearchInput.scss"

// components
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Image from 'next/image'

const SearchInput = (): ReactElement => {
    return (
        <Paper
            className="searchInput"
            component="form"
            sx={{ m: 'auto', display: 'flex', alignItems: 'center', width: '90%' }}
        >
            <div className="locationIcon">
                <Image src="/imgs/location.png" alt="location" width={ 24 } height={ 24 } />
            </div>
            <InputBase
                sx={{ ml: 1, flex: 1, borderRadius: '0' }}
                placeholder="Busque por atração"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Divider sx={{ height: 46 }} orientation="vertical" />
            <div className="searchIcon">
                <Image src="/imgs/search.png" alt="search" width={ 24 } height={ 24 } />
            </div>
        </Paper>
    );
}

export default SearchInput