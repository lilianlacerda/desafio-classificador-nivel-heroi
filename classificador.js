let nomeHeroi = "Lilian";
let quantidadeXp = 1000210;
let nivel = "";
let mensagemMotivacional = "";

if(quantidadeXp < 1000 ){
    nivel = "Ferro!";
    mensagemMotivacional = "Não desista!"

}else if(quantidadeXp >= 1001 && quantidadeXp <= 2000){
    nivel = "Bronze!";
    mensagemMotivacional = "Que ótimo avanço!"

}else if(quantidadeXp >= 2001 && quantidadeXp <= 5000){
    nivel = "Prata!";
    mensagemMotivacional = "Aí sim!"

}else if(quantidadeXp >= 5001 && quantidadeXp <= 7000){
    nivel = "Ouro!";
    mensagemMotivacional = "Você é fera!"

}else if(quantidadeXp >= 7001 && quantidadeXp <= 8000){
    nivel = "Platina!";
    mensagemMotivacional = "Que orgulho!"

}else if(quantidadeXp >= 8001 && quantidadeXp <= 9000){
    nivel = "Ascendente!";
    mensagemMotivacional = "Ninguém te para!"

}else if(quantidadeXp >= 9001 && quantidadeXp <= 10000){
    nivel = "Imortal!";
    mensagemMotivacional = "Profissional master!"

}else{
    nivel = "Radiante!";
    mensagemMotivacional = "Já era, o topo é seu!"
};

console.log("Bem vindo ao classificador de nível!")

console.log("O heroi de nome " + nomeHeroi + " está no nível de " + nivel + " " + mensagemMotivacional);