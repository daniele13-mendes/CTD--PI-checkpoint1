// Menu do meu microondas.

let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;

function pratoEscolhido(prato,tempo){
let pratoEscolhido = prato;

if(pratoEscolhido == tempo && pratoEscolhido >= tempo / 2){
console.log("Prato pronto, bom apetite!!!")
}
else if (pratoEscolhido <= tempo / 2 && pratoEscolhido >= tempo / 3){
console.log(" Prato pronto, bom apetite!!!" + "Sua comida queimou");
}
else if (pratoEscolhido > tempo){
console.log(" Prato pronto, bom apetite!!!" + " Tempo insuficiente");
}
else if (pratoEscolhido <= tempo * 3){
console.log( "Prato pronto, bom apetite!!!" + " kabumm");
}
else {
console.log("Prato inexistente")
}
}


pratoEscolhido(carne,10);
pratoEscolhido(pipoca,10);
pratoEscolhido(feijao,24);
pratoEscolhido(brigadeiro,30);
pratoEscolhido();
