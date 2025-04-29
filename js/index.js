const temaBtn = document.getElementById('temaBtn');
const modal = document.getElementById('modal');
const cancelar = document.getElementById('cancelar');
const confirmar = document.getElementById('confirmar');
const temaEscuro = document.getElementById('tema-escuro');
const temaClaro = document.getElementById('tema-claro');
let temaSelecionado = 'modo-claro';

// Abrir modal
temaBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Fechar modal sem alterar o tema
cancelar.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Selecionar tema escuro
temaEscuro.addEventListener('click', () => {
    temaSelecionado = 'modo-escuro';
    destacarBotao(temaEscuro, temaClaro);
});

// Selecionar tema claro
temaClaro.addEventListener('click', () => {
    temaSelecionado = 'modo-claro';
    destacarBotao(temaClaro, temaEscuro);
});

// Confirmar seleção do tema
confirmar.addEventListener('click', () => {
    document.body.className = temaSelecionado;
    modal.style.display = 'none';
});

// Destacar botão selecionado
function destacarBotao(botaoSelecionado, botaoNaoSelecionado) {
    botaoSelecionado.classList.add('selecionado');
    botaoNaoSelecionado.classList.remove('selecionado');
}
