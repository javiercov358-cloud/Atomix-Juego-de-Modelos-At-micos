const btnInicio = document.getElementById("btnInicio");

const inicio = document.getElementById("inicio");

const juego = document.getElementById("juego");

const pantallaModelo =
document.getElementById("pantallaModelo");

const btnVolver =
document.getElementById("btnVolver");

const btnQuiz =
document.getElementById("btnQuiz");

const pantallaQuiz =
document.getElementById("pantallaQuiz");

const pantallaFinal =
document.getElementById("pantallaFinal");

const btnMenu =
document.getElementById("btnMenu");


// INICIAR JUEGO

btnInicio.addEventListener("click", () => {

    inicio.classList.add("oculto");

    juego.classList.remove("oculto");

});


// VOLVER

btnVolver.addEventListener("click", () => {

    pantallaModelo.classList.add("oculto");

    juego.classList.remove("oculto");

    btnVolver.classList.add("oculto");

});

btnMenu.addEventListener("click", () => {

    pantallaFinal.classList.add("oculto");

    juego.classList.remove("oculto");

});

// BOTONES

const botones =
document.querySelectorAll(".modelo-btn");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const modelo =
        boton.textContent.trim();

        cambiarModelo(modelo);

    });

});


// FUNCION

function cambiarModelo(modelo){

    modeloActual = modelo;

    juego.classList.add("oculto");

    pantallaModelo.classList.remove("oculto");

    btnVolver.classList.remove("oculto");

    const titulo =
    document.getElementById("modeloTitulo");

    const texto =
    document.getElementById("modeloTexto");

    const videoModelo =
    document.getElementById("videoModelo");

    const imgCientifico =
    document.getElementById("imagenCientifico");

    const dialogo =
    document.querySelector(".atomix-dialogo");

    const fondo =
    document.getElementById("pantallaModelo");


    // DALTON

    if(modelo === "Dalton"){

        fondo.style.backgroundImage =
        "url('./bg/fondo_dos.png')";

        titulo.textContent =
        "Modelo Atómico de Dalton";

        texto.innerHTML = `
            John Dalton fue un químico, meteorólogo y físico británico que propuso el primer modelo atómico moderno en el año 1803.

            <br><br>

            Dalton afirmaba que toda la materia estaba formada por partículas extremadamente pequeñas llamadas átomos.

            <br><br>

            Según su modelo, los átomos eran esferas sólidas, indivisibles e indestructibles.

            <br><br>

            También explicó que los átomos de un mismo elemento eran idénticos entre sí.

            <br><br>

            ⚛️ <b>Características principales:</b>

            <br><br>

            • El átomo es una esfera sólida.

            <br>

            • Los átomos son indivisibles.

            <br>

            • Los átomos de un mismo elemento son iguales.

            <br>

            • Los compuestos se forman al unir átomos.

            <br><br>

            🧪 <b>Aportes importantes:</b>

            <br><br>

            • Creó la primera teoría atómica moderna.

            <br>

            • Explicó las leyes de las proporciones químicas.

            <br>

            • Ayudó al desarrollo de la química científica.

            <br><br>

            ❌ <b>Limitaciones:</b>

            <br><br>

            El modelo de Dalton no explicaba la existencia de electrones, protones o neutrones.

            <br><br>

            📌 <b>Dato curioso:</b>

            <br><br>

            John Dalton también estudió el daltonismo, condición visual que afecta la percepción de colores.
            `;

        escribirDialogo(
            "⚛️ Dalton creó el primer modelo atómico moderno.",
            dialogo,
            25
        );

        videoModelo.src =
        "assets/modelo_d.mp4";

        imgCientifico.src =
        "assets/dalton.jpg";
    }


    // THOMSON

    else if(modelo === "Thomson"){

        fondo.style.backgroundImage =
        "url('./bg/fondo_dos.png')";

        titulo.textContent =
        "Modelo Atómico de Thomson";

        texto.innerHTML = `
        J. J. Thomson fue un físico británico que descubrió el electrón en 1897.

        <br><br>

        Gracias a sus experimentos con rayos catódicos, demostró que el átomo no era indivisible.

        <br><br>

        Thomson propuso un modelo donde el átomo era una esfera positiva con electrones incrustados.

        <br><br>

        ⚛️ <b>Características principales:</b>

        <br><br>

        • El átomo tiene carga positiva.

        <br>

        • Los electrones están incrustados en el átomo.

        <br>

        • El átomo sigue siendo estable.

        <br>

        • El modelo fue conocido como “pastel de pasas”.

        <br><br>

        🧪 <b>Aportes importantes:</b>

        <br><br>

        • Descubrió el electrón.

        <br>

        • Demostró que el átomo tiene partículas internas.

        <br>

        • Revolucionó la física moderna.

        <br><br>

        ❌ <b>Limitaciones:</b>

        <br><br>

        El modelo no explicaba cómo se organizaban realmente los electrones.

        <br><br>

        📌 <b>Dato curioso:</b>

        <br><br>

        J. J. Thomson ganó el Premio Nobel de Física en 1906.
        `;

        escribirDialogo(
            "⚡ Thomson descubrió los electrones.",
            dialogo,
            25
        );

        videoModelo.src =
        "assets/modelo_t.mp4";

        imgCientifico.src =
        "assets/thomson.jpg";
    }


    // RUTHERFORD

    else if(modelo === "Rutherford"){
        
        fondo.style.backgroundImage =
        "url('./bg/fondo_dos.png')";

        titulo.textContent =
        "Modelo Atómico de Rutherford";

        texto.innerHTML = `
        Ernest Rutherford fue un físico y químico neozelandés considerado el padre de la física nuclear.

        <br><br>

        En 1911 propuso un nuevo modelo atómico después de realizar el famoso experimento de la lámina de oro.

        <br><br>

        Rutherford descubrió que el átomo tenía un núcleo pequeño, denso y con carga positiva.

        <br><br>

        También demostró que gran parte del átomo era espacio vacío.

        <br><br>

        ⚛️ <b>Características principales:</b>

        <br><br>

        • El átomo posee un núcleo central.

        <br>

        • El núcleo contiene carga positiva.

        <br>

        • Los electrones giran alrededor del núcleo.

        <br>

        • La mayor parte del átomo es espacio vacío.

        <br><br>

        🧪 <b>Experimento de la lámina de oro:</b>

        <br><br>

        Rutherford lanzó partículas alfa hacia una lámina de oro muy delgada.

        <br><br>

        La mayoría atravesó la lámina, pero algunas rebotaron.

        <br><br>

        Gracias a esto concluyó que el átomo tenía un núcleo muy pequeño y denso.

        <br><br>

        🧪 <b>Aportes importantes:</b>

        <br><br>

        • Descubrió el núcleo atómico.

        <br>

        • Demostró que el átomo no era sólido.

        <br>

        • Inició el desarrollo de la física nuclear.

        <br><br>

        ❌ <b>Limitaciones:</b>

        <br><br>

        El modelo no explicaba por qué los electrones no caían hacia el núcleo.

        <br><br>

        📌 <b>Dato curioso:</b>

        <br><br>

        Rutherford fue el primero en dividir artificialmente un átomo.
        `;

        escribirDialogo(
            "🧪 Rutherford descubrió el núcleo.",
            dialogo,
            25
        );

        videoModelo.src =
        "assets/modelo_r.mp4";

        imgCientifico.src =
        "assets/rutherford.jpg";
    }


    // BOHR

    else if(modelo === "Bohr"){

        fondo.style.backgroundImage =
        "url('./bg/fondo_dos.png')";

        titulo.textContent =
        "Modelo Atómico de Bohr";

        texto.innerHTML = `
        Niels Bohr fue un físico danés que propuso el modelo atómico en 1913.

        <br><br>

        Su modelo mejoró el de Rutherford al explicar cómo se organizan los electrones.

        <br><br>

        Bohr propuso que los electrones giran alrededor del núcleo en órbitas fijas llamadas niveles de energía.

        <br><br>

        ⚛️ <b>Características principales:</b>

        <br><br>

        • Los electrones giran en órbitas definidas.

        <br>

        • Cada órbita tiene un nivel de energía.

        <br>

        • Los electrones pueden saltar entre niveles.

        <br>

        • Mientras están en una órbita no pierden energía.

        <br><br>

        🌌 <b>Explicación del modelo:</b>

        <br><br>

        Los electrones solo pueden existir en ciertas órbitas permitidas, no entre ellas.

        <br><br>

        Cuando un electrón absorbe energía, sube de nivel.

        Cuando libera energía, baja de nivel.

        <br><br>

        🧪 <b>Aportes importantes:</b>

        <br><br>

        • Explicó el espectro del hidrógeno.

        <br>

        • Mejoró el modelo de Rutherford.

        <br>

        • Introdujo los niveles de energía.

        <br><br>

        ❌ <b>Limitaciones:</b>

        <br><br>

        Solo funciona bien para átomos con un electrón.

        <br><br>

        📌 <b>Dato curioso:</b>

        <br><br>

        Bohr ganó el Premio Nobel de Física en 1922.
        `;

        escribirDialogo(
            "🌌 Bohr explicó las órbitas electrónicas.",
            dialogo,
            25
        );

        videoModelo.src =
        "assets/modelo_b.mp4";

        imgCientifico.src =
        "assets/bohr.jpg";
    }


    // SCHRODINGER

    else if(modelo === "Schrödinger"){

        fondo.style.backgroundImage =
        "url('./bg/fondo_dos.png')";

        titulo.textContent =
        "Modelo Mecánico Cuántico";

        texto.innerHTML = `
        Erwin Schrödinger fue un físico austriaco y uno de los fundadores de la mecánica cuántica.

        <br><br>

        En 1926 propuso un modelo atómico basado en ondas de probabilidad.

        <br><br>

        A diferencia de Bohr, Schrödinger no describió órbitas exactas para los electrones.

        <br><br>

        En su modelo, los electrones se encuentran en regiones de probabilidad llamadas orbitales.

        <br><br>

        ☁️ <b>Características principales:</b>

        <br><br>

        • Los electrones no tienen trayectoria fija.

        <br>

        • Se describen como ondas de probabilidad.

        <br>

        • Existen orbitales alrededor del núcleo.

        <br>

        • Es imposible conocer su posición exacta.

        <br><br>

        🧠 <b>Base del modelo:</b>

        <br><br>

        Se basa en la ecuación de onda de Schrödinger.

        Describe el comportamiento probabilístico de los electrones.

        <br><br>

        🧪 <b>Aportes importantes:</b>

        <br><br>

        • Creó el modelo mecánico cuántico.

        <br>

        • Introdujo el concepto de orbitales.

        <br>

        • Base de la física cuántica moderna.

        <br><br>

        ❌ <b>Limitaciones:</b>

        <br><br>

        No permite visualizar órbitas exactas.

        <br><br>

        📌 <b>Dato curioso:</b>

        <br><br>

        Su famoso experimento mental es el “gato de Schrödinger”.
        `;

        escribirDialogo(
            "☁️ Bienvenido a la mecánica cuántica.",
            dialogo,
            25
        );

        videoModelo.src =
        "assets/modelo_s.mp4";

        imgCientifico.src =
        "assets/schrodinger.jpg";
    }

}

function escribirDialogo(texto, elemento, velocidad = 30) {
    elemento.textContent = "";
    let i = 0;

    const intervalo = setInterval(() => {
        elemento.textContent += texto.charAt(i);
        i++;

        if (i >= texto.length) {
            clearInterval(intervalo);
        }
    }, velocidad);
}

btnQuiz.addEventListener("click", () => {

    // DALTON

    if(modeloActual === "Dalton"){

        preguntasActuales = preguntasDalton;
    }

    // THOMSON

    else if(modeloActual === "Thomson"){

        preguntasActuales = preguntasThomson;
    }

    // RUTHERFORD

    else if(modeloActual === "Rutherford"){

    preguntasActuales = preguntasRutherford;
    }

    // BOHR

    else if(modeloActual === "Bohr"){

    preguntasActuales = preguntasBohr;
    }

    //SOHRODINGER

    else if(modeloActual === "Schrödinger"){

    preguntasActuales = preguntasSchrodinger;
    }

    preguntaActual = 0;

    puntaje = 0;

    document.getElementById("puntaje")
    .textContent =
    "Puntaje: 0";

    mostrarPregunta();

    pantallaModelo.classList.add("oculto");

    btnVolver.classList.add("oculto");

    pantallaQuiz.classList.remove("oculto");

});

const preguntasDalton = [

    {
        pregunta:
        "¿Cómo imaginaba Dalton al átomo?",

        opciones: [
            "Como una nube electrónica",
            "Como una esfera sólida",
            "Como un núcleo vacío",
            "Como una órbita"
        ],

        correcta:
        "Como una esfera sólida"
    },

    {
        pregunta:
        "¿En qué año Dalton propuso su modelo atómico?",

        opciones: [
            "1803",
            "1911",
            "1897",
            "1926"
        ],

        correcta:
        "1803"
    },

    {
        pregunta:
        "¿Qué decía Dalton sobre los átomos de un mismo elemento?",

        opciones: [
            "Que eran diferentes",
            "Que tenían electrones",
            "Que eran iguales",
            "Que tenían órbitas"
        ],

        correcta:
        "Que eran iguales"
    },

    {
        pregunta:
        "¿Qué partícula NO explicaba el modelo de Dalton?",

        opciones: [
            "Neutrones",
            "Electrones",
            "Protones",
            "Todas las anteriores"
        ],

        correcta:
        "Todas las anteriores"
    },

    {
        pregunta:
        "¿Qué ciencia ayudó a desarrollar el modelo de Dalton?",

        opciones: [
            "Astronomía",
            "Química moderna",
            "Geografía",
            "Robótica"
        ],

        correcta:
        "Química moderna"
    }

];

const preguntasThomson = [

    {
        pregunta:
        "¿Qué descubrió J. J. Thomson?",

        opciones: [
            "El protón",
            "El electrón",
            "El núcleo",
            "El neutrón"
        ],

        correcta:
        "El electrón"
    },

    {
        pregunta:
        "¿En qué año Thomson descubrió el electrón?",

        opciones: [
            "1803",
            "1911",
            "1897",
            "1926"
        ],

        correcta:
        "1897"
    },

    {
        pregunta:
        "¿Cómo era el modelo atómico de Thomson?",

        opciones: [
            "Una nube electrónica",
            "Un átomo vacío",
            "Un pastel de pasas",
            "Órbitas electrónicas"
        ],

        correcta:
        "Un pastel de pasas"
    },

    {
        pregunta:
        "¿Qué utilizó Thomson en sus experimentos?",

        opciones: [
            "Rayos láser",
            "Rayos catódicos",
            "Electricidad estática",
            "Imanes"
        ],

        correcta:
        "Rayos catódicos"
    },

    {
        pregunta:
        "¿Qué carga tenían los electrones?",

        opciones: [
            "Positiva",
            "Negativa",
            "Neutra",
            "Variable"
        ],

        correcta:
        "Negativa"
    }

];

const preguntasRutherford = [

    {
        pregunta:
        "¿Qué descubrió Rutherford?",

        opciones: [
            "El electrón",
            "El núcleo atómico",
            "El neutrón",
            "La nube electrónica"
        ],

        correcta:
        "El núcleo atómico"
    },

    {
        pregunta:
        "¿Qué experimento realizó Rutherford?",

        opciones: [
            "Rayos catódicos",
            "Lámina de oro",
            "Electricidad estática",
            "Tubos de vacío"
        ],

        correcta:
        "Lámina de oro"
    },

    {
        pregunta:
        "¿Cómo era el átomo según Rutherford?",

        opciones: [
            "Completamente sólido",
            "Una nube cuántica",
            "Mayormente espacio vacío",
            "Un pastel de pasas"
        ],

        correcta:
        "Mayormente espacio vacío"
    },

    {
        pregunta:
        "¿Dónde se concentra la carga positiva del átomo?",

        opciones: [
            "En los electrones",
            "En las órbitas",
            "En el núcleo",
            "En toda la esfera"
        ],

        correcta:
        "En el núcleo"
    },

    {
        pregunta:
        "¿Qué partículas giran alrededor del núcleo?",

        opciones: [
            "Protones",
            "Neutrones",
            "Electrones",
            "Partículas alfa"
        ],

        correcta:
        "Electrones"
    }

];

const preguntasBohr = [

    {
        pregunta:
        "¿Qué propuso Bohr sobre los electrones?",

        opciones: [
            "Que están en el núcleo",
            "Que giran en órbitas fijas",
            "Que no existen",
            "Que están quietos"
        ],

        correcta:
        "Que giran en órbitas fijas"
    },

    {
        pregunta:
        "¿Cómo se llaman las órbitas de Bohr?",

        opciones: [
            "Capas de energía",
            "Niveles de energía",
            "Campos magnéticos",
            "Nubes electrónicas"
        ],

        correcta:
        "Niveles de energía"
    },

    {
        pregunta:
        "¿Qué pasa cuando un electrón absorbe energía?",

        opciones: [
            "Desaparece",
            "Baja de nivel",
            "Sube de nivel",
            "Se rompe"
        ],

        correcta:
        "Sube de nivel"
    },

    {
        pregunta:
        "¿Qué elemento explicó mejor el modelo de Bohr?",

        opciones: [
            "Oxígeno",
            "Hidrógeno",
            "Helio",
            "Carbono"
        ],

        correcta:
        "Hidrógeno"
    },

    {
        pregunta:
        "¿Qué modelo mejoró Bohr?",

        opciones: [
            "Dalton",
            "Thomson",
            "Rutherford",
            "Schrödinger"
        ],

        correcta:
        "Rutherford"
    }

];

const preguntasSchrodinger = [

    {
        pregunta:
        "¿Qué describe el modelo de Schrödinger?",

        opciones: [
            "Órbitas fijas",
            "Niveles de energía simples",
            "Probabilidad de encontrar electrones",
            "Átomos sólidos"
        ],

        correcta:
        "Probabilidad de encontrar electrones"
    },

    {
        pregunta:
        "¿Cómo se llaman las regiones donde están los electrones?",

        opciones: [
            "Capas",
            "Orbitales",
            "Núcleos",
            "Celdas"
        ],

        correcta:
        "Orbitales"
    },

    {
        pregunta:
        "¿En qué año propuso Schrödinger su modelo?",

        opciones: [
            "1803",
            "1911",
            "1926",
            "1897"
        ],

        correcta:
        "1926"
    },

    {
        pregunta:
        "¿Qué teoría base usa Schrödinger?",

        opciones: [
            "Relatividad",
            "Mecánica cuántica",
            "Electromagnetismo clásico",
            "Gravedad"
        ],

        correcta:
        "Mecánica cuántica"
    },

    {
        pregunta:
        "¿Qué famoso experimento mental creó Schrödinger?",

        opciones: [
            "El átomo de oro",
            "El electrón libre",
            "El gato de Schrödinger",
            "La doble rendija"
        ],

        correcta:
        "El gato de Schrödinger"
    }

];

let preguntasActuales = [];
let modeloActual = "";
let preguntaActual = 0;


function mostrarPregunta(){

    const pregunta =
    preguntasActuales[preguntaActual];

    document.getElementById("pregunta")
    .textContent = pregunta.pregunta;

    document.getElementById("op1")
    .textContent = pregunta.opciones[0];

    document.getElementById("op2")
    .textContent = pregunta.opciones[1];

    document.getElementById("op3")
    .textContent = pregunta.opciones[2];

    document.getElementById("op4")
    .textContent = pregunta.opciones[3];

}

const opciones =
document.querySelectorAll(".opcion");

let puntaje = 0;

opciones.forEach(boton => {

    boton.addEventListener("click", () => {

        const respuestaUsuario =
        boton.textContent;

        const correcta =
        preguntasActuales[preguntaActual].correcta;

        
        // RESPUESTA CORRECTA

        if(respuestaUsuario === correcta){

            boton.style.background =
            "lime";

            puntaje += 20;

            document.getElementById("puntaje")
            .textContent =
            "Puntaje: " + puntaje;
        }

        
        // RESPUESTA INCORRECTA

        else{

            boton.style.background =
            "red";
        }


        // SIGUIENTE PREGUNTA

        setTimeout(() => {

            preguntaActual++;

            
            // TERMINA QUIZ

            if(preguntaActual >= preguntasActuales.length){

                pantallaQuiz.classList.add("oculto");

                pantallaFinal.classList.remove("oculto");

                document.getElementById("puntajeFinal")
                .textContent =
                "Puntaje: " + puntaje;


                // SI GANA

                if(puntaje > 50){

                    document.getElementById("mensajeFinal")
                    .textContent =
                    "⚛️ ¡Increíble trabajo científico!";

                    document.getElementById("imagenFinal")
                    .src =
                    "assets/atomix_s4.png";
                }


                // SI PIERDE

                else{

                    document.getElementById("mensajeFinal")
                    .textContent =
                    "😢 Sigue estudiando los modelos atómicos";

                    document.getElementById("imagenFinal")
                    .src =
                    "assets/atomix_s1.png";
                }

                preguntaActual = 0;

                puntaje = 0;

                document.getElementById("puntaje")
                .textContent =
                "Puntaje: 0";


                return;
            }


            // RESETEAR COLORES

            opciones.forEach(btn => {

                btn.style.background = "";

            });

            mostrarPregunta();

        }, 1000);

    });

});