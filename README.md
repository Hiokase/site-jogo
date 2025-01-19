# Desafio do Presente 🎁

Este projeto foi criado como uma brincadeira interativa para uma pessoa especial descobrir quem enviou um presente. O site consiste em uma série de desafios que o usuário deve completar para revelar a mensagem final.

---

## Como Funciona 🕹️

O site é composto por três páginas principais:

1. **index.html**: Contém uma série de desafios interativos que o usuário deve completar.
2. **cards.html**: Exibe mensagens especiais após a conclusão dos desafios.
3. **finish.html**: A última etapa, onde o usuário arrasta um círculo para um quadrado para revelar a mensagem final e descobrir quem enviou o presente.

### Desafios no `index.html`

- **Desafio 1**: Clique no botão 5 vezes.
- **Desafio 2**: Acerte o botão que se move aleatoriamente.
- **Desafio 3**: Toque no botão que muda de cor.
- **Desafio 4**: Ache o botão invisível.
- **Desafio 5**: Toque no botão quando ele estiver grande.
- **Desafio 6**: Toque no botão que gira rapidamente.
- **Desafio 7**: Toque no botão que se move rapidamente.
- **Desafio 8**: Toque no botão quando ele estiver visível.

Após completar todos os desafios, o usuário é redirecionado para a página `cards.html`, onde pode ver mensagens especiais. Finalmente, na página `finish.html`, o usuário arrasta um círculo para um quadrado para revelar a mensagem final e descobrir quem enviou o presente.

---

## Tecnologias Utilizadas 🛠️

- **HTML**: Estrutura do site.
- **CSS**: Estilização e design responsivo.
- **JavaScript**: Lógica dos desafios e interatividade.

---

## Como Executar Localmente 🖥️

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/desafio-do-presente.git
Navegue até o diretório do projeto:

bash
Copy
cd desafio-do-presente
Abra o arquivo index.html:

Você pode abrir o arquivo index.html diretamente no seu navegador ou usar um servidor local para executar o projeto.

Divirta-se!:

Complete os desafios e descubra a mensagem final.

Personalização ✨
Configuração da Mensagem Pré-definida e Número do WhatsApp 📲
Na página finish.html, há um botão que redireciona o usuário para o WhatsApp com uma mensagem pré-definida. Para configurar isso, siga os passos abaixo:

Abra o arquivo script.js:

Localize a seção do código que corresponde à página finish.html.

Configure o Número do WhatsApp:

No arquivo script.js, procure a seguinte linha:

javascript
Copy
const phoneNumber = ''; // Numero do seu wtt que vai ser levado!
Substitua o valor vazio '' pelo número de telefone no formato internacional. Por exemplo, para o Brasil, o número deve estar no formato +5511999999999 (código do país + DDD + número).

Exemplo:

javascript
Copy
const phoneNumber = '+5511999999999'; // Número do WhatsApp
Configure a Mensagem Pré-definida:

Ainda no arquivo script.js, procure a linha:

javascript
Copy
const message = encodeURIComponent('Desenvolvido por hokase');
Substitua o texto 'Desenvolvido por hokase' pela mensagem que você deseja que seja enviada automaticamente. A função encodeURIComponent garante que a mensagem seja formatada corretamente para URLs.

Exemplo:

javascript
Copy
const message = encodeURIComponent('Olá! Adorei o presente e completei todos os desafios! 🎉');
Teste o Botão:

Após configurar o número e a mensagem, salve o arquivo e abra a página finish.html no navegador.

Clique no botão "Descobrir quem foi" para garantir que ele redireciona corretamente para o WhatsApp com a mensagem pré-definida.

Exemplo Completo no Código
Aqui está como o código final deve ficar no arquivo script.js:

javascript
Copy
const whatsappButton = document.getElementById('whatsappButton');
whatsappButton.addEventListener('click', () => {
    const phoneNumber = '+5511999999999'; // Número do WhatsApp (formato internacional)
    const message = encodeURIComponent('Olá! Adorei o presente e completei todos os desafios! 🎉'); // Mensagem pré-definida
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
});
Contribuição 🤝
Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. Todas as contribuições são bem-vindas!

Licença 📄
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Feito com ❤️ por Seu Nome
