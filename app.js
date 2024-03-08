const matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]];
  
  
  function desaparecerEncriptado() {
  
        if(document.getElementById("textareaIn").value != ""){

            document.getElementById("area-encriptado-elementos").style.display = "none";
            document.getElementById("textarea-encriptado").style.display = "flex";
            document.getElementById("textarea-encriptado").disabled = false;
            document.getElementById("boton-copiar").style.display = "flex";
        
            document.getElementById("textarea-encriptado").value = encriptar();

        }else{
            alert("Debe ingresar un mensaje.");
        }
    }
  
    
  
    function encriptar(){
      
        let texto = document.getElementById("textareaIn").value;
        
        texto = texto.toLowerCase();

        if(!acentos(texto)){
            for (let i=0;i<matriz.length; i++){
                if(texto.includes(matriz[i][0])){
                    texto = texto.replaceAll(matriz[i][0], matriz[i][1]);
                }      
            }
        } else {
            alert('¡No se permiten acentos!');
            return "";
        }
  
        return texto;
    }

    function acentos(texto){
        let tildes = ["á","é","í","ó","ú"];

        for (let i=0;i<tildes.length; i++){
            if (texto.includes(tildes[i])){
                return true;
            }
        }
            
        return false;        
    }
  
    function desenciptar(){
  
        let textoEncrip = document.getElementById("textareaIn").value;
  
        for (let i=matriz.length-1; i>=0; i--){            
            if (textoEncrip.includes(matriz[i][1])){
                textoEncrip = textoEncrip.replaceAll(matriz[i][1], matriz[i][0]);
            }
        }
  
        document.getElementById("textarea-encriptado").value = textoEncrip;
  
    }
    
  
    function copiarTexto(){
      let textoCopiado = document.getElementById("textarea-encriptado");
  
      textoCopiado.select();
      textoCopiado.setSelectionRange(0,99999);
  
      navigator.clipboard.writeText(textoCopiado.value);
    }
   
  