const color = require('cli-color');
const input = require('prompt-sync')();

const planta = [
  [22, 22, 22, 22, 22, 33, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
  [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
];

const colorir = (text: number): string => {
  if (text === 22) {
    return color.red.bgBlack("  ");
  } else if (text === 11) {
    return color.blue.bgXterm(129)("  ");
  } else if (text === 33) {
    return color.green.bgWhite("  ");
  } else {
    return color.yellow.bgBlue("  ");
  }
};

let x:number = 0;
let y:number = 5;
let passos:number = 0;

const mostrarPlanta = () => {
  console.clear();
  for (let i of planta) {
    let linha = [];
    for (let e of i) {
      linha.push(colorir(e));
    }
    console.log(linha.join(''));
  }
  console.log("Passos", passos);
};

const descer = ():void => {
  if (x + 1 <= planta.length && planta[x + 1][y] !== 22){
    planta[x][y] = 11;
    x = x + 1;
    planta[x][y] = 33;
    passos++;
  }
};

const subir = ():void => {
  if (x - 1 >= 0 && planta[x - 1][y] !== 22){
    planta[x][y] = 11;
    x = x - 1;
    planta[x][y] = 33;
    passos++;
  }
};

const esquerda = ():void => {
  if (y - 1 >= 0 && planta[x][y - 1] !== 22){
    planta[x][y] = 11;
    y = y - 1;
    planta[x][y] = 33;
    passos++;
  }
};

const direita = ():void => {
  if (y - 1 < planta[0].length && planta[x][y + 1] !== 22){
    planta[x][y] = 11;
    y = y + 1;
    planta[x][y] = 33;
    passos++;
  }
};

const verificarProduto = ():boolean =>{
  for (var linha of planta){
    for (var item of linha){
      if(item == 88){
        return false;
      }
    }
  }
  return true;
}


while (true) {
  mostrarPlanta();
  let escolha = input("Digite uma direção: W (Cima),A (Esquerda),S (Baixo),D (Direita): ");
  if (escolha.toUpperCase() === "QUIT") {
    break;
  } else if (escolha.toUpperCase() === "W") {
    subir();
  } else if (escolha.toUpperCase() === "A") {
    esquerda();
  } else if (escolha.toUpperCase() === "S") {
    descer();
  } else if (escolha.toUpperCase() === "D ") {
    direita();
  }
}