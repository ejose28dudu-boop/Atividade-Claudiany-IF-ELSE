const n1 = 7.5;
const n2 = 8.0;
const n3 = 6.5;
const mediaFinal = (n1 + n2 + n3) / 3;
console.log("A média é:", mediaFinal.toFixed(2));

const valorA = 10;
const valorB = "10";
console.log("São iguais com '==' (ampla)?", valorA == valorB);
console.log("São iguais com '===' (estrita)?", valorA === valorB);

const pontuacao = 85;

if( pontuacao >= 90){
    console.log("Classificação: A");
} else if(pontuacao >= 70) {
    console.log("Classificação: B");
}else{
    console.log("Classificação: Precisa melhorar");
}

const idade = Number(prompt('Qual a sua idade?'));
const altura = Number(prompt('Qual a sua altura?'));
const podeEntrar =  idade >=16 && altura >= 1.60;

if(podeEntrar){
    console.log("Parabéns, você cumpre os requesitos obrigatórios para entrar na zona RADICAL");
}else{
    console.log("Você não cumpre algum dos requesitos obrigatórios para entrar na zona RADICAL");
}