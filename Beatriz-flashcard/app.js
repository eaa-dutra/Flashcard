function criaCartao(categoria, pergunta, resposta) {
    // Acessa o container onde os cartões serão adicionados
    const container = document.getElementById('container');
    
    // Cria um novo cartão (article)
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Insere o conteúdo HTML do cartão
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Variável para controlar o estado de visibilidade da resposta
    let respostaEstaVisivel = false;

    // Função que alterna a visibilidade da resposta (rotação do cartão)
    function viraCartao() {
        // Alterna o estado da resposta visível
        respostaEstaVisivel = !respostaEstaVisivel;
        
        // Aplica ou remove a classe 'active' no cartão, dependendo do estado
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // Adiciona o evento de clique no cartão
    cartao.addEventListener('click', viraCartao);

    // Adiciona o cartão ao container
    container.appendChild(cartao);
}