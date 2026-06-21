import Logo from './Logo.jsx'
import Menu from './Menu.jsx'

function Header({paginaAtiva, aoMudarPagina}) {
    return (
        <header class="header">
            <Logo/>
            <Menu paginaAtiva={paginaAtiva} aoMudarPagina={aoMudarPagina}/>
        </header>
    )
}

export default Header