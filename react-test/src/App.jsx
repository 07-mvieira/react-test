import {useState} from 'react'
import Header from './components/Header.jsx'

import Home from './pages/Home.jsx'
import Empresa from './pages/Empresa.jsx'
import Produtos from './pages/Produtos.jsx'
import Contato from './pages/Contato.jsx'

import './App.css'

function App() {
  const [paginaAtiva, setPaginaAtiva] = useState('Home')

  function renderizarPagina() {
    // qual é a diferença entre == e === ?
    if (paginaAtiva === 'Empresa') return <Empresa/>
    if (paginaAtiva === 'Produtos') return <Produtos/>
    if (paginaAtiva === 'Contato') return <Contato/>

    // por que isso não usa uma estrutura if else?
    return (
      <Home />
    )
  }

  return (
    // por que essa tag está vazia?
    <>
      <Header 
        paginaAtiva={paginaAtiva}
        aoMudarPagina={setPaginaAtiva}
      />

      <main class="conteudo-principal">
        {renderizarPagina()}
      </main>
    </>
  )
}

export default App
