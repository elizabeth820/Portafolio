let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString('Diane Alonso')
    .pauseFor(300)
    .deleteAll()
    .typeString('Desarrolladora Frontend Jr')
    .pauseFor(1000)
    .start();

let frase = document.getElementById('frase');

let typewriterf = new Typewriter(frase, {
    loop: true,
    delay: 75,
});

typewriterf
    .pauseFor(2500)
    .typeString('Si lo puedes soñar lo puedes lograr')
    .pauseFor(300)
    .deleteAll()
    .typeString('Walt Disney')
    .pauseFor(1000)
    .start();