$(document).ready(function () {
    // Crie os pontos luminosos com ícones de formigas
    createAntDots();

    // Animação constante dos pontos
    setInterval(function () {
        animateAntDots();
    }, 3000); // Tempo de intervalo entre animações (3 segundos)
});

function createAntDots() {
    // Crie um contêiner para os pontos
    var dotsContainer = $("<div>").addClass("dots-container").appendTo("body");

    // Número de pontos
    var numberOfDots = 200;

    for (var i = 0; i < numberOfDots; i++) {
        var dot = $("<div>").addClass("dot").html('<i class="fas fa-ant"></i>').appendTo(dotsContainer);
    }
}

function animateAntDots() {
    var centerX = window.innerWidth / 1;
    var centerY = window.innerHeight / 1;
    var allowedAreaX = window.innerWidth * 1;
    var allowedAreaY = window.innerHeight * 0.5;

    $(".dot").each(function (index) {
        var dot = $(this);

        // Animação de movimento dos pontos para o centro
        dot.animate(
            {
                center: centerX,
                top: centerY,
                opacity: 0.2,
            },
            Math.random() * 4000 + 1000, // Tempo de animação entre 1 e 4 segundos
            function () {
                // Após alcançar o centro, espalhe novamente
                var randomX = Math.random() * allowedAreaX;
                var randomY = Math.random() * allowedAreaY;

                dot.animate(
                    {
                        left: randomX,
                        top: randomY,
                        opacity: 1,
                    },
                    Math.random() * 4000 + 1000 // Tempo de animação entre 1 e 4 segundos
                );
            }
        );
    });
}
