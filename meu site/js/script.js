const livros = [

{
    nome:"O Duque e Eu",
    genero:"Romance",
    classificacao:"14+",
    colecao:"Bridgerton",
    capa:"capas/duque.jpg",
    pagina:"duque.html"
},

{
    nome:"O Visconde que Me Amava",
    genero:"Romance",
    classificacao:"14+",
    colecao:"Bridgerton",
    capa:"capas/visconde.jpg",
    pagina:"visconde.html"
},

{
    nome:"Harry Potter e a Pedra Filosofal",
    genero:"Fantasia",
    classificacao:"10+",
    colecao:"Harry Potter",
    capa:"capas/hp1.jpg",
    pagina:"hp1.html"
},

{
    nome:"Percy Jackson e o Ladrão de Raios",
    genero:"Fantasia",
    classificacao:"12+",
    colecao:"Percy Jackson",
    capa:"capas/percy1.jpg",
    pagina:"percy1.html"
}

];

const listaLivros = document.getElementById("listaLivros");
const pesquisa = document.getElementById("pesquisa");
const filtroGenero = document.getElementById("filtroGenero");
const filtroClassificacao = document.getElementById("filtroClassificacao");
const filtroColecao = document.getElementById("filtroColecao");

function carregarLivros(){

    listaLivros.innerHTML="";

    const texto = pesquisa.value.toLowerCase();
    const genero = filtroGenero.value;
    const classificacao = filtroClassificacao.value;
    const colecao = filtroColecao.value;

    const filtrados = livros.filter(livro => {

        return (
            livro.nome.toLowerCase().includes(texto) &&
            (genero === "" || livro.genero === genero) &&
            (classificacao === "" || livro.classificacao === classificacao) &&
            (colecao === "" || livro.colecao === colecao)
        );

    });

    filtrados.forEach(livro => {

        const card = document.createElement("div");

        card.className = "livro";

        card.innerHTML = `
            <img src="${livro.capa}">
            <div class="info">
                <h3>${livro.nome}</h3>
                <p>📚 ${livro.genero}</p>
                <p>🔞 ${livro.classificacao}</p>
                <p>📖 ${livro.colecao}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            window.location.href = livro.pagina;
        });

        listaLivros.appendChild(card);

    });

}

pesquisa.addEventListener("input", carregarLivros);
filtroGenero.addEventListener("change", carregarLivros);
filtroClassificacao.addEventListener("change", carregarLivros);
filtroColecao.addEventListener("change", carregarLivros);

carregarLivros();
