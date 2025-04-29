const temaBtn = document.getElementById('temaBtn');
const modal = document.getElementById('modal');
const cancelar = document.getElementById('cancelar');
const confirmar = document.getElementById('confirmar');
const temaEscuro = document.getElementById('tema-escuro');
const temaClaro = document.getElementById('tema-claro');
let temaSelecionado = 'modo-claro';


temaBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});


cancelar.addEventListener('click', () => {
    modal.style.display = 'none';
});


temaEscuro.addEventListener('click', () => {
    temaSelecionado = 'modo-escuro';
    destacarBotao(temaEscuro, temaClaro);
});


temaClaro.addEventListener('click', () => {
    temaSelecionado = 'modo-claro';
    destacarBotao(temaClaro, temaEscuro);
});


confirmar.addEventListener('click', () => {
    document.body.className = temaSelecionado;
    modal.style.display = 'none';
});

function destacarBotao(botaoSelecionado, botaoNaoSelecionado) {
    botaoSelecionado.classList.add('selecionado');
    botaoNaoSelecionado.classList.remove('selecionado');
}
