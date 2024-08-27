
var botonEncriptar = document.querySelector(".btn__encriptar");
var botonDesencriptar = document.querySelector(".btn__desencriptar");
var botonLimpiar = document.querySelector(".btn__limpiar");
var munieco = document.querySelector(".imagen__munieco");
var contenedor = document.querySelector(".presentacion__contenido");
var resultado = document.querySelector(".evaluar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonLimpiar.onclick = limpiarTextarea;

function encriptar() {
    var cajatexto = recuperarTexto()
    if (cajatexto === "") {
        alert("Por favor, ingresa un texto para encriptar.");
        return;
    }
    if (contieneMayusculas(cajatexto)) {
        alert("El texto solo debe contener letras minúsculas.");
        return;
    }
    if (contieneAcentosOCaracteresEspeciales(cajatexto)) {
        alert("El texto no debe contener acentos ni caracteres especiales.");
        return;
    }
    ocultarAdelante();
    resultado.textContent = encriptarTexto(cajatexto);
}
function desencriptar() {
    var cajatexto = recuperarTexto()
    if (cajatexto === "") {
        alert("Por favor, ingresa un texto para encriptar.");
        return;
    }
    if (contieneMayusculas(cajatexto)) {
        alert("El texto solo debe contener letras minúsculas.");
        return;
    }
    if (contieneAcentosOCaracteresEspeciales(cajatexto)) {
        alert("El texto no debe contener acentos ni caracteres especiales.");
        return;
    }
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".encriptador__texto");
    return cajatexto.value
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function limpiarTextarea() {
    document.querySelector(".encriptador__texto").value = "";
        // Restaurar elementos visuales a su estado inicial
        mostrarElementosIniciacion();
    
        // Limpiar el área de resultados
        resultado.textContent = "";
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i=0; i<texto.length; i++) {
        if(texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
        
    }
    return textoFinal;
}


function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if(texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
        
    }
    return textoFinal;
}


const botonCopiar = document.querySelector(".btn__copiar");
    botonCopiar.addEventListener("click", copiar =() => {
        var contenido = document.querySelector(".evaluar").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");
    })

    function mostrarElementosIniciacion() {
        // Mostrar el muñeco y el contenedor (si estaban ocultos)
        munieco.classList.remove("ocultar");
        contenedor.classList.remove("ocultar");
    }

    function contieneMayusculas(texto) {
        return /[A-Z]/.test(texto);
    }
    
    function contieneAcentosOCaracteresEspeciales(texto) {
        // Verificar si el texto contiene acentos o caracteres especiales
        return /[^a-z\s]/.test(texto);
    }