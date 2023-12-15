$(document).ready(function () {
    // Crie os pontos luminosos com ícones de formigas
    createAntDots();

    // Animação constante dos pontos
    animateAntDots();
});

function createAntDots() {
    // Crie um contêiner para os pontos
    var dotsContainer = $("<div>").addClass("dots-container").appendTo("body");

    // Número de pontos
    var numberOfDots = 100;

    for (var i = 0; i < numberOfDots; i++) {
        var dot = $("<div>").addClass("dot").html('<i class="fas fa-ant"></i>').appendTo(dotsContainer);

        // Inicie cada ponto com posição e opacidade aleatórias
        dot.css({
            center: Math.random() * window.innerWidth * 0.9,
            top: Math.random() * (window.innerHeight * 0.9),
            opacity: Math.random(),
        });
    }
}

function animateAntDots() {
    var allowedAreaX = window.innerWidth * 0.9;
    var allowedAreaY = window.innerHeight * 0.9;

    $(".dot").each(function (index) {
        var dot = $(this);

        // Animação de movimento aleatório
        var randomX = Math.random() * allowedAreaX;
        var randomY = Math.random() * allowedAreaY;

        dot.animate(
            {
                left: randomX,
                top: randomY,
                opacity: Math.random(),
            },
            Math.random() * 10000 + 2000, // Tempo de animação entre 1 e 4 segundos
            function () {
                // Chama a animação novamente
                animateAntDots();
            }
        );
    });
}
