import { ReactElement } from 'react'
import Link from "next/link";

const Filters = (): ReactElement => {
    return (
        <>
            <header className="header">
                <h1>Filtro</h1>
                <Link href="/">Limpar todos os filtros</Link>
            </header>
        </>
    )
}

export default Filters