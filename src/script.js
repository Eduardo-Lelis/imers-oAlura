function calculoMedia() 
{
var valor = parseFloat(document.getElementById("valor").value);
var valor2 = parseFloat(document.getElementById("valor2").value);
var valor3 = parseFloat(document.getElementById("valor3").value);
var valor4 = parseFloat(document.getElementById("valor4").value);
  
var media = (valor + valor2 + valor3 + valor4) / 4;
  
  if(media<7)
    {
      document.getElementById("resultado").innerHTML =
        "<font color='red'> <b> Reprovado com média igual a " + media.toFixed(1) + "</br>";
    }if (media>=7)
    {
      document.getElementById("resultado").innerHTML =
       "<font color='blue'> <b> Aprovado com média igual a" + media.toFixed(1) + "</br>";
    }  
  
 
}


