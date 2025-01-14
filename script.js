if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    const botao1 = document.getElementById('botao1');
    const contador1 = document.getElementById('contador1');
    let cliques1 = 0;

    botao1.addEventListener('click', () => {
        cliques1++;
        contador1.textContent = `Cliques: ${cliques1}/5`;
        if (cliques1 === 5) {
            esconderDesafioAtual('desafio1');
            mostrarProximoDesafio('desafio2');
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
        esconderDesafioAtual('desafio2');
        mostrarProximoDesafio('desafio3');
    });

    setInterval(moverBotao2, 1000);

    const botao3 = document.getElementById('botao3');
    const cores = ['#ff6f61', '#4caf50', '#2196f3', '#ffeb3b', '#9c27b0'];
    let indiceCor = 0;

    function mudarCorBotao3() {
        botao3.style.backgroundColor = cores[indiceCor];
        indiceCor = (indiceCor + 1) % cores.length;
    }

    botao3.addEventListener('click', () => {
        esconderDesafioAtual('desafio3');
        mostrarProximoDesafio('desafio4');
    });

    setInterval(mudarCorBotao3, 600);

    const botao4 = document.getElementById('botao4');

    botao4.addEventListener('click', () => {
        esconderDesafioAtual('desafio4');
        mostrarProximoDesafio('desafio5');
    });

    const botao5 = document.getElementById('botao5');
    let tamanho = 1;
    let podeClicar = true;

    function mudarTamanhoBotao5() {
        tamanho = tamanho === 1 ? 0.5 : 1;
        botao5.style.transform = `scale(${tamanho})`;
        podeClicar = tamanho === 1;
    }

    botao5.addEventListener('click', () => {
        if (podeClicar) {
            esconderDesafioAtual('desafio5');
            mostrarProximoDesafio('desafio6');
        }
    });

    setInterval(mudarTamanhoBotao5, 800);

    const botao6 = document.getElementById('botao6');
    let rotacao = 0;

    function girarBotao6() {
        rotacao += 90;
        botao6.style.transform = `rotate(${rotacao}deg)`;
    }

    botao6.addEventListener('click', () => {
        esconderDesafioAtual('desafio6');
        mostrarProximoDesafio('desafio7');
    });

    setInterval(girarBotao6, 300);

    const botao7 = document.getElementById('botao7');

    function moverBotao7() {
        const x = Math.random() * (window.innerWidth - botao7.offsetWidth);
        const y = Math.random() * (window.innerHeight - botao7.offsetHeight);
        botao7.style.position = 'absolute';
        botao7.style.left = `${x}px`;
        botao7.style.top = `${y}px`;
    }

    botao7.addEventListener('click', () => {
        esconderDesafioAtual('desafio7');
        mostrarProximoDesafio('desafio8');
    });

    setInterval(moverBotao7, 500);

    const botao8 = document.getElementById('botao8');
    let opacidade = 1;
    let podeClicar8 = true;

    function mudarOpacidadeBotao8() {
        opacidade = opacidade === 1 ? 0.3 : 1;
        botao8.style.opacity = opacidade;
        podeClicar8 = opacidade === 1;
    }

    botao8.addEventListener('click', () => {
        if (podeClicar8) {
            esconderDesafioAtual('desafio8');
            document.getElementById('mensagem').classList.remove('escondido');
            setTimeout(() => {
                window.location.href = 'cards.html';
            }, 2000);
        }
    });

    setInterval(mudarOpacidadeBotao8, 700);

    function esconderDesafioAtual(id) {
        document.getElementById(id).classList.add('escondido');
    }

    function mostrarProximoDesafio(id) {
        document.getElementById(id).classList.remove('escondido');
    }
}

if (window.location.pathname.includes('cards.html')) {
    const mensagens = [
        { titulo: "CARD TESTE", texto: "TESTE" },
        { titulo: "CARD TESTE", texto: "TESTE" },
        { titulo: "CARD TESTE", texto: "TESTE" },
        { titulo: "CARD TESTE", texto: "TESTE" },
        { titulo: "CARD TESTE", texto: "TESTE" },
        { titulo: "CARD TESTE", texto: "TESTE" },
        { titulo: "CARD TESTE", texto: "TESTE" }

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
        if (cardAtual > 0) {
            cards[cardAtual - 1].classList.add('escondido');
        }
        cards[cardAtual].classList.remove('escondido');
        cards[cardAtual].classList.add('visivel');
        cardAtual++;
        if (cardAtual >= cards.length) {
            botaoProsseguir.classList.add('escondido');
            setTimeout(() => {
                window.location.href = 'finish.html';
            }, 2000);
        }
    }

    botaoProsseguir.addEventListener('click', mostrarProximoCard);

    criarCards();
    mostrarProximoCard();
}

if (window.location.pathname.includes('finish.html')) {
    const arrastavel = document.getElementById('arrastavel');
    const alvo = document.getElementById('alvo');
    const final = document.getElementById('final');

    arrastavel.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        arrastavel.style.left = `${touch.clientX - arrastavel.offsetWidth / 2}px`;
        arrastavel.style.top = `${touch.clientY - arrastavel.offsetHeight / 2}px`;
    });

    arrastavel.addEventListener('touchend', () => {
        const arrastavelRect = arrastavel.getBoundingClientRect();
        const alvoRect = alvo.getBoundingClientRect();

        if (
            arrastavelRect.left > alvoRect.left &&
            arrastavelRect.right < alvoRect.right &&
            arrastavelRect.top > alvoRect.top &&
            arrastavelRect.bottom < alvoRect.bottom
        ) {
            final.classList.remove('escondido');
            arrastavel.classList.add('escondido');
        }
    });

    const whatsappButton = document.getElementById('whatsappButton');
    whatsappButton.addEventListener('click', () => {
        const phoneNumber = ''; // Numero do seu wtt que vai ser levado!
        const message = encodeURIComponent('Desenvolvido por hokase');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });
}