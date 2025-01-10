if (window.location.href.includes('index.html')) {
    const botao1 = document.getElementById('botao1');
    const contador1 = document.getElementById('contador1');
    let cliques1 = 0;

    botao1.addEventListener('click', () => {
        cliques1++;
        contador1.textContent = `Cliques: ${cliques1}/3`;
        if (cliques1 === 3) {
            document.getElementById('desafio1').classList.add('escondido');
            document.getElementById('desafio2').classList.remove('escondido');
        }
    });

    const botao2 = document.getElementById('botao2');

    function moverBotao2() {
        const x = Math.random() * (window.innerWidth - botao2.offsetWidth);
        const y = Math.random() * (window.innerHeight - botao2.offsetHeight);
        botao2.style.position = 'absolute';
        botao2.style.left = `${x}px`;
        botao2.style.top = `${y}px`;
    }

    botao2.addEventListener('click', () => {
        document.getElementById('desafio2').classList.add('escondido');
        document.getElementById('desafio3').classList.remove('escondido');
    });

    setInterval(moverBotao2, 1000);

    const botao3 = document.getElementById('botao3');

    function piscarBotao3() {
        botao3.style.visibility = botao3.style.visibility === 'hidden' ? 'visible' : 'hidden';
    }

    botao3.addEventListener('click', () => {
        document.getElementById('desafio3').classList.add('escondido');
        document.getElementById('desafio4').classList.remove('escondido');
    });

    setInterval(piscarBotao3, 800);

    const botao4 = document.getElementById('botao4');

    botao4.addEventListener('click', () => {
        document.getElementById('desafio4').classList.add('escondido');
        document.getElementById('desafio5').classList.remove('escondido');
    });

    const botao5 = document.getElementById('botao5');
    const cores = ['#ff6f61', '#4caf50', '#2196f3', '#ffeb3b', '#9c27b0'];
    let indiceCor = 0;

    function mudarCorBotao5() {
        botao5.style.backgroundColor = cores[indiceCor];
        indiceCor = (indiceCor + 1) % cores.length;
    }

    botao5.addEventListener('click', () => {
        document.getElementById('mensagem').classList.remove('escondido');
        setTimeout(() => {
            window.location.href = 'cards.html';
        }, 2000);
    });

    setInterval(mudarCorBotao5, 600);
}

if (window.location.href.includes('cards.html')) {
    const mensagens = [
        { titulo: "Mensagem teste", texto: "Mensagem teste" },
        { titulo: "Mensagem teste", texto: "Mensagem teste" },
        { titulo: "Mensagem teste", texto: "Mensagem teste" },
        { titulo: "Mensagem teste", texto: "Mensagem teste" },
        { titulo: "Mensagem teste", texto: "Mensagem teste" },
        { titulo: "Mensagem teste", texto: "Mensagem teste" },
        { titulo: "Mensagem teste", texto: "Mensagem teste" },
        { titulo: "Mensagem teste", texto: "Mensagem teste" },
        { titulo: "Mensagem teste", texto: "Mensagem teste" },
        { titulo: "Mensagem teste", texto: "Mensagem teste" },
        { titulo: "Mensagem teste", texto: "Mensagem teste" },
        { titulo: "Mensagem teste", texto: "Mensagem teste" },
    ];

    const cardsContainer = document.getElementById('cards-container');
    const botaoProsseguir = document.getElementById('prosseguir');
    let cardAtual = 0;

    function criarCards() {
        mensagens.forEach((mensagem, index) => {
            const card = document.createElement('div');
            card.classList.add('card', 'escondido');
            card.innerHTML = `
                <div class="card-conteudo">
                    <h2>${mensagem.titulo}</h2>
                    <p>${mensagem.texto}</p>
                </div>
            `;
            cardsContainer.appendChild(card);
        });
    }

    function mostrarProximoCard() {
        const cards = document.querySelectorAll('.card');
        if (cardAtual < cards.length) {
            cards[cardAtual].classList.remove('escondido');
            cards[cardAtual].classList.add('visivel');
            cardAtual++;

            if (cardAtual < cards.length) {
                botaoProsseguir.classList.remove('escondido');
            } else {
                botaoProsseguir.classList.add('escondido');
            }
        }
    }

    criarCards();

    setTimeout(mostrarProximoCard, 500);

    botaoProsseguir.addEventListener('click', mostrarProximoCard);
}