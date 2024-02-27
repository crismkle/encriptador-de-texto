const matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]];
  
  
  function desaparecerEncriptado() {
  
      document.getElementById("textarea-encriptado").style.backgroundImage = "none";
      document.getElementById("textarea-encriptado").disabled = false;
      document.getElementById("boton-copiar").style.display = "block";
  
      document.getElementById("textarea-encriptado").value = encriptar();
    }
  
    
  
    function encriptar(){
      
        let texto = document.getElementById("textareaIn").value;
  
        for (let i=0;i<matriz.length; i++){
            if(texto.includes(matriz[i][0])){
                texto = texto.replaceAll(matriz[i][0], matriz[i][1]);
            }      
        }
  
        return texto;
    }
  
    function desenciptar(){
  
        let textoEncrip = document.getElementById("textareaIn").value;
  
        for (let i=0; i<matriz.length; i++){
            if (textoEncrip.includes(matriz[i][1])){
                textoEncrip = textoEncrip.replaceAll(matriz[i][1], matriz[i][0]);
            }
        }
  
        document.getElementById("textarea-encriptado").value = textoEncrip;
  
    }
    
  
    function copiarTexto(){
      let textoCopiado = document.getElementById("textarea-encriptado");
  
      textoCopiado.select();
      textoCopiado.setSelectionRange(0,99999); //For mobile devices
  
      navigator.clipboard.writeText(textoCopiado.value);
    }
   
  