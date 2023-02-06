let pilotos = prompt("Insira os nomes dos pilotos separados por vírgula: ");

if (pilotos === null || pilotos === "") {
  alert("Nenhum piloto inserido");
} else {
  let listaPilotos = pilotos.split(",");
  let resultado = "";
  
  for (let i = 0; i < listaPilotos.length; i++) {
    let posicao = i + 1;
    
    if (i < 3) {
      resultado += "Pódio – " + posicao + " – " + listaPilotos[i] + "\n";
    } else {
      resultado += posicao + " – " + listaPilotos[i] + "\n";
    }
  }
  
  alert(resultado);
}