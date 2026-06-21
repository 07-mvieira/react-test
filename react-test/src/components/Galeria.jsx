import CardFoto from "./CardFoto.jsx"

function Galeria() {
    const fotos = [
        {
            imagem: '',
            titulo: '',
            descricao: '',
        },
        {
            imagem: '',
            titulo: '',
            descricao: '',
        },
        {
            imagem: '',
            titulo: '',
            descricao: '',
        },
    ]

    return (
        <section class="galeria">
            <div class="titulo-secao">
                <span>Galeria</span>
                <h2>Resultado visual da Home</h2>
            </div>
            <div class="grade-fotos">
                {fotos.map((foto) => (
                    <CardFoto 
                        key={foto.titulo}
                        imagem={foto.imagem}
                        titulo={foto.titulo}
                        descricao={foto.descricao}
                    />
                ))}
            </div>
        </section>
    )
}

export default Galeria