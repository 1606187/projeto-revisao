console.log("== INDEX JS ==")

async function iniciarProcessoLista() {
    // Processamento
    // 1 - Fazer chamada de API GET em /livros
    // Utilizar o fetch
    const response = await fetch("https://api-aula.up.railway.app/livros")
    const livros = await response.json()

    // 2 - Com o resultado da API, montar uma tabela com os livros
    // Montar um texto cru com tags misturado com os dados dos livros
    const inicioTabela = `
    <table border="2">
        <thead>
            <tr>
                <th>ID</th>
                <th>TÍTULO</th>
                <th>DESCRIÇÃO</th>
            </tr>
        </thead>
        <tbody>
    `
    
    let meioTabela = ``

    for (let index = 0; index < livros.length; index++) {
        meioTabela += `
        <tr>
            <td>${livros[index].id}</td>
            <td>${livros[index].title}</td>
            <td>${livros[index].description}</td>
        </tr>
    `
    }
    

    const fimTabela = `
            </tbody>
    </table>
    `

    const tabelaCompleta = inicioTabela + meioTabela + fimTabela

    // Saída
    // 1 - Com a tabela montada, atribuir a tabela no DOM
    // Com getlementById, pegar um elemento que quero mudar
    // e mudar o innerHTML dele com o texto da tabela que foi construída
    // com os dados dos livros
    document.getElementById("caixa_listagem_livros").innerHTML = tabelaCompleta
}
