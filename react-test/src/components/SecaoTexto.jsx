function SecaoTexto({titulo, texto}) {
    // para não ter que escrever <h2></h2> <p></p> 329388389223 vezes
    return (
        <section class="secao-texto">
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </section>
    )
}

export default SecaoTexto