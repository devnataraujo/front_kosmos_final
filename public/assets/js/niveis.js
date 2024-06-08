// função para trocar ícone no hover
document.addEventListener('DOMContentLoaded', function() {
    const backIconLink = document.getElementById('backIconLink');
    const backIcon = document.getElementById('backIcon');

    backIconLink.addEventListener('mouseover', function() {
        backIcon.classList.remove('bi-arrow-left-circle');
        backIcon.classList.add('bi-arrow-left-circle-fill');
    });

    backIconLink.addEventListener('mouseout', function() {
        backIcon.classList.remove('bi-arrow-left-circle-fill');
        backIcon.classList.add('bi-arrow-left-circle');
    });
});

// slider
const slidesContent = [
    {
        title: "NETUNO",
        subtitle: "Neste nível, nós sairemos de Netuno mas não sem antes aprendermos sobre variaveis, não esqueça de levar combustível com você",
        qtd: "4.5",
        fraseQtd: "bilhões de quilômetros ate o Sol",
        qtdDiasAno: "60.190",
        fraseQtdDiasAno: "dias por ano",
        posicaoSistemaSolar: "8°",
        frasePosicaoSistemaSolar: "planeta do sistema solar",
        caminhoImagem: "/assets/img/planeta_netuno.png",
        etapa: "iniciar jornada"
    },
    {
        title: "URANO",
        subtitle: "Nossa primeira parada, chegamos em Urano, aqui aprenderemos a carregar muitas coisas em uma só variavel, um novo amigo chamado Vetor, não esqueça de nada em!",
        qtd: "2.8",
        fraseQtd: "bilhões de quilômetros ate o Sol",
        qtdDiasAno: "30.681",
        fraseQtdDiasAno: "dias por ano",
        posicaoSistemaSolar: "7°",
        frasePosicaoSistemaSolar: "planeta do sistema solar",
        caminhoImagem: "/assets/img/planeta_urano.png",
        etapa: "primeira parada"
    },
    {
        title: "SATURNO",
        subtitle: "Oba!! Você chegou em Saturno, estamos cada vez mais perto do Sol, agora vamos aprender sobre condições.",
        qtd: "1.4",
        fraseQtd: "bilhões de quilômetros ate o Sol",
        qtdDiasAno: "10.760",
        fraseQtdDiasAno: "dias por ano",
        posicaoSistemaSolar: "6°",
        frasePosicaoSistemaSolar: "planeta do sistema solar",
        caminhoImagem: "/assets/img/planeta_saturno.png",
        etapa: "segunda parada"
    },
    {
        title: "JÚPITER",
        subtitle: "Chegamos em Júpiter, neste nível você vai descobrir que existem outros tipos de condições, vamos nessa? ",
        qtd: "750",
        fraseQtd: "milhões de quilômetros ate o Sol",
        qtdDiasAno: "4.332",
        fraseQtdDiasAno: "dias por ano",
        posicaoSistemaSolar: "5°",
        frasePosicaoSistemaSolar: "planeta do sistema solar",
        caminhoImagem: "/assets/img/planeta_júpiter.png",
        etapa: "terceira parada"
    },
    {
        title: "MARTE",
        subtitle: "Marte vai nos trazer bastante desafios, vamos aprender a usar as condições de formas diferentes. Bora lá?",
        qtd: "225",
        fraseQtd: "milhões de quilômetros ate o Sol",
        qtdDiasAno: "687",
        fraseQtdDiasAno: "dias por ano",
        posicaoSistemaSolar: "4°",
        frasePosicaoSistemaSolar: "planeta do sistema solar",
        caminhoImagem: "/assets/img/planeta_marte.png",
        etapa: "quarta parada"
    },
    {
        title: "TERRA",
        subtitle: "Estamos na Terra, o nosso preciosos lar mas não esqueça o foco na missão. Pegue combustivel e comidas e continue sua jornada!",
        qtd: "150",
        fraseQtd: "milhões de quilômetros ate o Sol",
        qtdDiasAno: "365",
        fraseQtdDiasAno: "dias por ano",
        posicaoSistemaSolar: "3°",
        frasePosicaoSistemaSolar: "planeta do sistema solar",
        caminhoImagem: "/assets/img/planeta_terra.png",
        etapa: "quinta parada"
    },
    {
        title: "VÊNUS",
        subtitle: "Estamos cada vez mais perto do Sol, dá para acreditar? por aqui vamos ter uma nova ajuda para nossa missão, a repetição.",
        qtd: "105",
        fraseQtd: "milhões de quilômetros ate o Sol",
        qtdDiasAno: "225",
        fraseQtdDiasAno: "dias por ano",
        posicaoSistemaSolar: "2°",
        frasePosicaoSistemaSolar: "planeta do sistema solar",
        caminhoImagem: "/assets/img/planeta_vênus.png",
        etapa: "sexta parada"
    },
    {
        title: "MÉRCURIO",
        subtitle: "Dá para acreditar?!!! Nosso ultimo planeta antes do Sol. Vamos lá, vamos pegar nosso último item pra nos ajudar a completar a missão.",
        qtd: "60",
        fraseQtd: "milhões de quilômetros ate o Sol",
        qtdDiasAno: "88",
        fraseQtdDiasAno: "dias por ano",
        posicaoSistemaSolar: "1°",
        frasePosicaoSistemaSolar: "planeta do sistema solar",
        caminhoImagem: "/assets/img/planeta_mércurio.png",
        etapa: "sétima parada"
    },
    {
        title: "SOL",
        subtitle: "Nós conseguimos, chegamos ao Sol com ajuda dos nossos amigos lógiquitos. Vamos finalizar essa ultima etapa e levar a mensagem para nossos amigos.",
        qtd: "4.6",
        fraseQtd: "Bilhões de anos de idade",
        qtdDiasAno: "&nbsp",
        fraseQtdDiasAno: "&nbsp",
        posicaoSistemaSolar: "&nbsp",
        frasePosicaoSistemaSolar: "&nbsp",
        caminhoImagem: "/assets/img/sol.png",
        etapa: "última parada"
    },
    
];

const slideContainer = document.querySelector('.slide-container');

function preencher_slides(slideIndex) {
    const slide = slidesContent[slideIndex];
    console.log(slideIndex);

    console.log(slide);
    document.getElementById('slide_title').innerHTML = slide.title; 
    document.getElementById('slide_subtitle').innerHTML = slide.subtitle;
    document.getElementById('qtd').innerHTML = slide.qtd;
    document.getElementById('fraseQtd').innerHTML = slide.fraseQtd;
    document.getElementById('qtdDiasAno').innerHTML = slide.qtdDiasAno;
    document.getElementById('fraseQtdDiasAno').innerHTML = slide.fraseQtdDiasAno;
    document.getElementById('posicaoSistemaSolar').innerHTML = slide.posicaoSistemaSolar;
    document.getElementById('frasePosicaoSistemaSolar').innerHTML = slide.frasePosicaoSistemaSolar;
    document.getElementById('containerImg').src = slide.caminhoImagem;
    document.getElementById('etapa').innerHTML = slide.etapa;
    // criar on click no botão #start_game
    document.getElementById('start_game').addEventListener('click', function() {
        // passar  tela  do nivel
        window.location.href = '/game/nivel'+(slideIndex+1);
    });
}

let slideIndex = 0;
preencher_slides(slideIndex);

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

document.getElementById('next').addEventListener('click', function() {
    slideIndex++;
    if (slideIndex >= slidesContent.length) {
        slideIndex = 0;
    }

    preencher_slides(slideIndex);
});

document.getElementById('prev').addEventListener('click', function() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slidesContent.length - 1;
    }

    preencher_slides(slideIndex);
});

preencher_slides(0);
