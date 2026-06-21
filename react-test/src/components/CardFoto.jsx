function CardFoto ({imagem, titulo, descricao}) {
    return (
        <article class="photo-card">
            <img src={imagem} alt={titulo} />
            <div class="card-conteudo">
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
        </article>
    )
}

export default CardFoto