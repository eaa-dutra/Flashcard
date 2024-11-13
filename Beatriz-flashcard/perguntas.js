// Função que cria os cartões
function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Adicionando o conteúdo HTML dentro do cartão
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta" style="display: none;">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    let respostaEstaVisivel = false;

    // Função que vira o cartão
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        const respostaElement = cartao.querySelector('.cartao__conteudo__resposta');
        
        // Controla a visibilidade da resposta
        respostaElement.style.display = respostaEstaVisivel ? 'block' : 'none';
        
        // Adiciona ou remove a classe 'active' para efeitos visuais
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // Adicionando evento de clique para virar o cartão
    cartao.addEventListener('click', viraCartao);

    // Adiciona o cartão ao container
    container.appendChild(cartao);
}

// Definindo as informações dos cartões de forma organizada em um array
const flashcards = [
    {
        categoria: 'Programação',
        pergunta: 'O que é Python?',
        resposta: 'O Python é uma linguagem de programação.'
    },
    {
        categoria: 'Programação',
        pergunta: 'O que é JavaScript?',
        resposta: 'É uma linguagem de programação que permite criar conteúdo dinâmico na web.'
    },
    {
        categoria: 'Geografia',
        pergunta: 'Qual a capital da França?',
        resposta: 'A capital da França é Paris.'
    },
    {
        categoria: 'Programação',
        pergunta: 'O que é uma função?',
        resposta: 'Uma função é um bloco de código que executa uma tarefa específica.'
    },
    {
        categoria: 'Língua Inglesa',
        pergunta: 'Como se diz "oi" em inglês?',
        resposta: 'Em inglês, "oi" se diz "HI" (pronunciado "RAI").'
    }
];

// Chama a função para criar os cartões com base nas informações do array
flashcards.forEach(cartaoInfo => {
    criaCartao(cartaoInfo.categoria, cartaoInfo.pergunta, cartaoInfo.resposta);
});
