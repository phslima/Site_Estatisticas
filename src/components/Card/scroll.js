var posicao = localStorage.getItem('posicaoScroll');

/* Se existir uma opção salva seta o scroll nela */
if(posicao) {    
    /* Timeout necessário para funcionar no Chrome */
    setTimeout(function() {
        window.scrollTo(0, posicao);
    }, 1);
}

/* Verifica mudanças no Scroll e salva no localStorage a posição */
window.onscroll = function (e) {
    posicao = window.scrollY;
    localStorage.setItem('posicaoScroll', JSON.stringify(posicao));
}