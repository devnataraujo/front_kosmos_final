const mensagens = [
    "> mensagem recebida do centro de controle",
    "> olá, Nathalia",
    "> precisamos da sua ajuda, nossa galáxia está correndo perigo e apenas a Pedra Solar pode nos salvar.",
    "> você pode nos ajudar?",
    "> digite “Sim” ou “Não”"
];

let mensagemAtual = 0;
let caractereAtual = 0;
const containerMensagem = document.getElementById('mensagem');
const somTecla = document.getElementById('somTecla');

const tempoPorCaractere = 30; 
const intervaloEntreMensagens = 10; 

function digitarMensagem() {
    if (mensagemAtual < mensagens.length) {
        if (caractereAtual < mensagens[mensagemAtual].length) {
            containerMensagem.innerHTML += mensagens[mensagemAtual].charAt(caractereAtual);
            caractereAtual++;
            setTimeout(digitarMensagem, tempoPorCaractere); 
        } else {
            containerMensagem.innerHTML += "<br>";
            caractereAtual = 0;
            mensagemAtual++;
            setTimeout(digitarMensagem, intervaloEntreMensagens); 
        }
    } else {
        containerMensagem.innerHTML += '> _ <input type="text" id="resposta" autofocus>';
        somTecla.pause();  
        document.getElementById('resposta').addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                let resposta = event.target.value.trim().toLowerCase();
                if (resposta === 'sim') {
                    window.location.href = 'niveis';  
                } else if (resposta === 'não' || resposta === 'nao') {
                    window.location.href = 'home';  
                }
            }
        });
    }
}

somTecla.play();
digitarMensagem();
