import Botao from './Botao.jsx'

function Hero() {
    return (
        <section class="hero">
            <div class="hero-conteudo" aria>
                <span class="etiqueta">Projeto</span>
                <h1>Título 1</h1>
                <p>Parágrafo</p>
                <Botao texto="Botão"/>
            </div>

            <div class="painel-projeto" aria-label="Resumo do projeto">
                <strong>Componentes do site</strong>
                <span>Header</span>
                <span>Hero</span>
                <span>Galeria</span>
                <span>Footer</span>
            </div>
        </section>
    )
}

export default Hero