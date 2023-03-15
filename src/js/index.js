/* 
    OBJETIVO: QUANDO CLICAR NO BOTAO MOSTRAR A IMAGEM CORRESPONDETE.
*/

// PASSO 1: LOCALIZAR O ELEMENTO HTML DOS BOTOES
const botoesCarrossel = document.querySelectorAll('.botao');
const imagem = document.querySelectorAll('.imagens');

// PASSO 2: IDENTIFICAR O CLIQUE DO USUARIO
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // PASSO 3: DESCAMRCAR O BOTAO SELECIONADO ANTERIORMENTE
        desativarBotaoSelecionado();

        // PASSO 4: MARCAR O BOTAO CLICADO
        marcarBotaoClicado(botao);

        // PASSO 5: ESCONDER A IMAGEM ATIVA
        esconderImagemAtiva();

        // PASSO 6: EXIBIR A IMAGEM CORRESPONDENTE AO BOTAO CLICADO
        mostrarImamgemDeFundo(indice);        
        
    })
})

function mostrarImamgemDeFundo(indice) {
    imagem[indice].classList.add('ativa');
}

function marcarBotaoClicado(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

