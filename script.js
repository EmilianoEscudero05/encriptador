var botonEncriptar = document.querySelector(".Encriptar");
var botonDesencriptar = document.querySelector(".Desencriptar");
var botonCopiar = document.querySelector(".copiar");

var resultado = document.querySelector(".textEncriptado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTextoAlPortapapelesDesdeTextarea;
function encriptar(){
    
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function evaluar(){
    

}





function desencriptar(){
   
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".textUser")
    return cajatexto.value
}


function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}


//Limpiar el campo 
function limpiar(){
    let textoaEncriptar = document.querySelector("#aEncriptar");
    let textEncriptado = document.querySelector("#encriptado1");

    textoaEncriptar.value= ""
    
    return;
}

function copiarTextoAlPortapapelesDesdeTextarea() {
    // Obtener el elemento textarea utilizando su ID encriptado
    var elementoTextarea = document.getElementById("encriptado1");
  
    if (!elementoTextarea) {
      console.error('¡No se pudo encontrar el textarea con el ID encriptado "encriptado1"!');
      return;
    }
  
    // Obtener el texto del textarea
    var textocopy = elementoTextarea.value;
  
    // Crear un elemento temporal para copiar el texto al portapapeles
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = textocopy;
  
    // Añadir el elemento temporal al DOM
    document.body.appendChild(elementoTemporal);
  
    // Seleccionar y copiar el texto al portapapeles
    elementoTemporal.select();
    document.execCommand("copy");
  
    // Eliminar el elemento temporal del DOM
    document.body.removeChild(elementoTemporal);
  
    console.log('Texto copiado al portapapeles desde el textarea con ID encriptado "encriptado1"');
  }
  
 