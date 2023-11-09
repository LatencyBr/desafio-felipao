let nomeHeroi = "Felipao"
let nivelHeroi = 1
let nivelClass = ''

if(nivelHeroi <= 1000){
    nivelClass = "Ferro"
}else if (nivelHeroi <= 2000){
    nivelClass = "Bronze"
}else if(nivelHeroi <= 6000){
    nivelClass = "Prata"
}else if(nivelHeroi <= 7000){
    nivelClass = "Ouro"
}else if(nivelHeroi <=8000){
    nivelClass = "Platina"
}else if(nivelHeroi <=9000){
    nivelClass = "Ascendente"
}else if(nivelHeroi <=10000){
    nivelClass = "Imortal"
}else{
    nivelClass = "Radiante"
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelClass}`)