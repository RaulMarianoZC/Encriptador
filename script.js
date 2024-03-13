//-------definiendo constantes------//
const botonEncriptar = document.querySelector(".boton-encriptar");
const textoEncriptar = document.querySelector(".area-encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const botonCopiar = document.querySelector(".boton-copiar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const contenedor = document.getElementById("muñeco");

//-------boton de Encriptar-------//
botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    //-------mensaje si el usuario no itroduce nada-------//
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    //-------mensaje si introcuce signo o algun caacter-------//
    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    //-------mensaje si el ususario introduce mayusculas-------//
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    //-------sustitucion de vocales por palabras-------//
    else{
        texto = texto.replace(/e/mg, "prck");
        texto = texto.replace(/i/mg, "frds");
        texto = texto.replace(/a/mg, "lfst");
        texto = texto.replace(/o/mg, "hnnm");
        texto = texto.replace(/u/mg, "ktry");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenedor.setAttribute("src", "./imagenes/candado-cerrado.jpg");
    }
});

//-------boton de Desencriptar-------//
botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    //-------mensaje si el usuario no itroduce nada-------//
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    //-------mensaje si introcuce signo o algun caacter-------//
    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    //-------mensaje si el ususario introduce mayusculas-------//
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    //-------sustitucion de palabras por vocales-------//
    else{
        texto = texto.replace(/prck/mg, "e");
        texto = texto.replace(/frds/mg, "i");
        texto = texto.replace(/lfst/mg, "a");
        texto = texto.replace(/hnnm/mg, "o");
        texto = texto.replace(/ktry/mg, "u");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
    }
});

//-------Boton de Copiar-------//
botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
});