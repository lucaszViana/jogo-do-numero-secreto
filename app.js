let listaDeNumerosSorteados = [] ;
let numerolimite = 10;
let numeroSecreto = gerarnumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
let chute = document.querySelector('input').value

if( chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 
    'tentativa';
    let mensagemTentativas =`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
exibirTextoNaTela('p',mensagemTentativas);
document.getElementById('reiniciar'). removeAttribute
('disabled');

} else {
    if(chute > numeroSecreto) {
        exibirTextoNaTela('p','O número secreto é menor');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
    } 
    tentativas++;
    limparCampo();

    }
}
 function gerarnumeroAleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * 3 + 1);
      
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista ==3) {
        listaDeNumerosSorteados = []
    }
    
    
    if(listaDeNumerosSorteados.includes(NumeroEscolhido)){
        return gerarnumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(NumeroEscolhido)
       console.log(listaDeNumerosSorteados)
        return NumeroEscolhido;
    }
 }
 function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
 }

 function reiniciarJogo() {
    numeroSecreto = gerarnumeroAleatorio()
    limparCampo();
    tentativas = 1;

 }

   