const color = require('cli-color');
const input = require('prompt-sync')();

const planta: number[][] = [
    [22, 22, 22, 22, 22, 33, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
  ]
  
  const planta1: number[][] = [
      [22, 22, 22, 22, 22, 33, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
      [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
      [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
      [22, 11, 11, 11, 22, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 11, 22],
      [22, 11, 11, 11, 22, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 11, 22],
      [22, 11, 11, 11, 11, 88, 11, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 11, 22],
      [22, 11, 11, 11, 11, 11, 11, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 11, 11, 22],
      [22, 11, 11, 11, 22, 22, 22, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 22],
      [22, 11, 11, 11, 22, 22, 22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 22],
      [22, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11, 11, 22],
      [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 11, 11, 11, 11, 22],
      [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 88, 11, 11, 11, 22],
      [22, 11, 11, 22, 22, 22, 22, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 11, 11, 22],
      [22, 11, 11, 22, 22, 22, 22, 22, 22, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 22],
      [22, 11, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 22],
      [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 22],
      [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
      [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
  ];

const colorir = (text: number): string => {
  if (text === 22) {
    return color.red.bgRed("  ");
  } else if (text === 11) {
    return color.blue.bgBlue("  ");
  } else if (text === 33) {
    return color.green.bgGreen("  ");
  } else if (text === 88) {
    return color.yellow.bgYellow("  ");
  } else {
    return "  ";
  }
}

let x: number = 0;
let y: number = 5;
let passos: number = 0;

const mostrarPlanta = (mapa: number[][]): void => {
  console.clear();
  for (let i of mapa) {
    let linha: any[] = [];
    for (let e of i) {
      linha.push(colorir(e));
    }
    console.log(linha.toString().replaceAll(',', ''));
  }
  console.log("Passos: ", passos);
}

const descer = (planta: number[][]): void => {
  if (x + 1 < planta.length && planta[x + 1][y] !== 22) {
    planta[x][y] = 11;
    x = x + 1;
    planta[x][y] = 33;
    passos++;
  }
}

const subir = (planta: number[][]): void => {
  if (x - 1 >= 0 && planta[x - 1][y] !== 22) {
    planta[x][y] = 11;
    x = x - 1;
    planta[x][y] = 33;
    passos++;
  }
}

const esquerda = (planta: number[][]): void => {
  if (y - 1 >= 0 && planta[x][y - 1] !== 22) {
    planta[x][y] = 11;
    y = y - 1;
    planta[x][y] = 33;
    passos++;
  }
}

const direita = (planta: number[][]): void => {
  if (y + 1 < planta[0].length && planta[x][y + 1] !== 22) {
    planta[x][y] = 11;
    y = y + 1;
    planta[x][y] = 33;
    passos++;
  }
}

const verificaProduto = (): boolean => {
  for (var linha of planta1) {
    for (var item of linha) {
      if (item == 88) {
        return false;
      }
    }
  }
  return true;
}

const start = (plantaAtual: number[][]) => {
    mostrarPlanta(plantaAtual);
    let escolha: string = input('Digite uma direção (w, a, s, d) ou quit para sair: ');
    if (escolha.toUpperCase() === 'QUIT' || verificaProduto()) {
      return;
    } else if (escolha.toUpperCase() === "W") {
      subir(plantaAtual);
    } else if (escolha.toUpperCase() === "S") {
      descer(plantaAtual);
    } else if (escolha.toUpperCase() === "A") {
      esquerda(plantaAtual);
    } else if (escolha.toUpperCase() === "D") {
      direita(plantaAtual);
    }
  
    if (plantaAtual === planta && x === 8 && y === 19) {
      plantaAtual = planta1;
      x = 0;
      y = 5;
    } else if (plantaAtual === planta1 && x === 0 && y === 5) {
      plantaAtual = planta;
      x = 8;
      y = 19;
    }
  
    start(plantaAtual);
  }
  
  start(planta);
  