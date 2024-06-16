function Ex1() {
  let nome = 'Gabriel';

  console.log(nome);
}

function Ex2() {
  let nome = 'Gabriel';
  let sobrenome = 'Belo';

  console.log(nome+" "+sobrenome); 
}

function Ex3() {
  let nome = 'Gabriel';
  let sobrenome = 'Belo';
  let idade = 31;
  let email = 'gb@email.com';

  console.log("Nome: " + nome); 
  console.log(  "Sobrenome: " + sobrenome);
  console.log(  "Idade: " + idade);
  console.log(  "Email: " + email);
}

function Ex4() {
  let nome = 'Gabriel';
  let sobrenome = 'Belo';
  let idade = 31;
  let email = 'gb@email.com';

  console.log("Nome: " + nome + "("+nome.length+")"); 
  console.log(  "Sobrenome: " + sobrenome + "("+sobrenome.length+")");
  console.log(  "Idade: " + idade);
  console.log(  "Email: " + email);
}

function Ex5() {
  let nome = 'Gabriel';
  let sobrenome = 'Belo';
  let idade = 31;
  let email = 'gb@email.com';

  console.log("Nome: " + nome.toUpperCase());
  console.log(  "Sobrenome: " + sobrenome.toLowerCase());
  console.log(  "Idade: " + idade);
  console.log(  "Email: " + email);
}

function Ex6() {

  let texto = '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem consequuntur voluptate et vero repellat nam alias culpa aliquid dolores! Impedit, excepturi placeat repudiandae culpa sint veritatis ipsam architecto eligendi temporibus.'
  
  console.log("Primeira ocorrência da letra a: "+texto.indexOf('a'));
  console.log("Ultima ocorrência da letra b: "+texto.lastIndexOf('b'));
}

function Ex7() {

  let n1 = 5;
  let n2 = 9;

  console.log(n1 + n2);
  console.log(n1 - n2);
  console.log(n1 * n2);
  console.log(n1 / n2);
  console.log(n1 % n2);
  console.log(Math.pow(n1, n2));
  console.log(Math.sqrt(n2));
  console.log(Math.abs(n1));
}

function Ex8() {

  console.log(Math.random());
}

function Ex9() {

  console.log(Math.ceil(Math.random()*10));
}

function Ex10() {

  let n1 = 5.34;
  let n2 = 9.18;

  console.log(n1);
  console.log(n2);
  console.log(Math.ceil(n1));
  console.log(Math.ceil(n2));
  console.log(Math.floor(n1));
  console.log(Math.floor(n2));
}

function Ex11() {

  let min = 36.5;
  let max = 40.0;
  let temp = (Math.random() * (max - min) + min).toFixed(1);

  if( temp > 37.5) {  
    console.log(temp + " Tem febre");
  } else {
    console.log(temp + " Saudavel")
  }

}

function Ex12() {

  let min = 34.0;
  let max = 40.0;
  let temp = parseFloat(Math.random() * (max - min) + min).toFixed(1);

  if (temp > 37.5) {
    console.log(temp + " - Tem febre");
  } else if (temp < 35.0) {
    console.log(temp + " - Temperatura muito baixa");
  } else {
    console.log(temp + " - Temperatura saudável");
  }

}

function Ex13() {
  let idade = parseInt(prompt("Digite a idade: "));
  let genero = prompt("Digite o gênero (masculino ou feminino):");

  let mensagem = "";

  if (genero === "masculino") {
    if (idade < 25) {
      mensagem = "O jovem";
    } else {
      mensagem = "O Homem";
    }
  } else if (genero === "feminino") {
    if (idade < 25) {
      mensagem = "A jovem";
    } else {
      mensagem = "A Mulher";
    }
  } else {
    mensagem = "Gênero não especificado corretamente";
  }

  if (idade >= 18) {
    mensagem += " é maior de idade";
  } else {
    mensagem += " é menor de idade";
  }

  console.log(`Idade: ${idade}, Gênero: ${genero}`);
  console.log(mensagem);
}

function Ex14() {
  let numero = Math.floor(Math.random() * 7);
  let mensagem = "";

  if (numero === 1) {
    mensagem = "Um";
  } else if (numero === 2) {
    mensagem = "Dois";
  } else if (numero === 3) {
    mensagem = "Três";
  } else if (numero === 4) {
    mensagem = "Quatro";
  } else if (numero === 5) {
    mensagem = "Cinco";
  } else {
    mensagem = "Outro valor";
  }

  console.log("Número gerado: " + numero);
  console.log(mensagem);
}

function Ex15() {
  let numero = parseInt(prompt("Digite um número de 1 a 5:"));
  let mensagem = "";

  switch (numero) {
    case 1:
      mensagem = "Um";
      break;
    case 2:
      mensagem = "Dois";
      break;
    case 3:
      mensagem = "Três";
      break;
    case 4:
      mensagem = "Quatro";
      break;
    case 5:
      mensagem = "Cinco";
      break;
    default:
      mensagem = "Outro valor";
  }

  console.log("Número gerado: " + numero);
  console.log(mensagem);
}

function Ex16() {
  for (let i = 1; i <= 1000; i++) {
    console.log(i);
  }
}

function Ex17() {
  let valor = 1;
  while (valor <= 1000) {
    console.log(valor);
    valor++;
  }
}

function Ex18() {

  let numero1 = parseInt(prompt("Digite o primeiro número:"));
  let numero2 = parseInt(prompt("Digite o segundo número:"));


  if (numero1 % numero2 === 0) {
    console.log(`${numero1} é múltiplo de ${numero2}.`);
  } else if (numero2 % numero1 === 0) {
    console.log(`${numero2} é múltiplo de ${numero1}.`);
  } else {
    console.log(`Nenhum dos números é múltiplo do outro.`);
  }
}

function Ex19() {

  let numero = parseInt(prompt("Digite um número:"))

  if (numero % 2 === 0) {
    console.log("O número "+ numero + " é par" );    
  } else {
    console.log("O número "+ numero + " é impar" ); 
  }
}

function Ex20() {

  let numero = parseInt(prompt("Digite um número positivo:"));

  if (numero >= 100 && numero <= 999) {
    
    let digitoCentena = Math.floor(numero / 100);
    let digitoDezena = Math.floor((numero / 10) % 10);
    let digitoUnidade = numero % 10;

    console.log(`${digitoCentena}  ${digitoDezena}  ${digitoUnidade}`);
  } else {
    console.log("O número digitado não tem 3 dígitos.");
  }
}

function Ex21() {
  
  let numero1 = parseInt(prompt("Digite o primeiro número:"));
  let numero2 = parseInt(prompt("Digite o segundo número:"));
  let numero3 = parseInt(prompt("Digite o terceiro número:"));

  let menorNumero = numero1;

  if (numero2 < menorNumero) {
    menorNumero = numero2;
  }

  if (numero3 < menorNumero) {
    menorNumero = numero3;
  }

  console.log(`O menor número entre ${numero1}, ${numero2} e ${numero3} é: ${menorNumero}`);

  }

  function Ex22() {
    
    let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
    let fahrenheit = celsius * 1.8 + 32;

    console.log(`${celsius} graus Celsius correspondem a ${fahrenheit.toFixed(2)} graus Fahrenheit.`);
}

function Ex23() {
  
  let euros = parseFloat(prompt("Digite o valor em Euros:"));

  const taxaDolar = 1.2; 
  const taxaLibra = 0.9; 
  const taxaReal = 4;  
  const taxaPeso = 28.5; 

  let dolares = euros * taxaDolar;
  let libras = euros * taxaLibra;
  let reais = euros * taxaReal;
  let pesos = euros * taxaPeso;

  console.log(`${euros} Euros correspondem a:`);
  console.log(`- ${dolares.toFixed(2)} Dólares`);
  console.log(`- ${libras.toFixed(2)} Libras`);
  console.log(`- ${reais.toFixed(2)} Reais`);
  console.log(`- ${pesos.toFixed(2)} Pesos`);
}

function Ex24() {

  function ehCapicua(num) {
      let numStr = num.toString();
      return numStr === numStr.split('').reverse().join('');
  }

  let numero = prompt("Digite um número inteiro positivo:");

  if (numero > 0 && Number.isInteger(parseInt(parseFloat(numero)))) {

      if (ehCapicua(numero)) {
          console.log(`${numero} é um número capicua.`);
      } else {
          console.log(`${numero} não é um número capicua.`);
      }
  } else {
      console.log("Por favor, digite um número inteiro positivo válido.");
  }
}

function Ex25() {

  let valor = parseInt(prompt("Digite um valor inteiro:"));

  if (valor > 10) {
      console.log(`Valores inteiros entre 0 e ${valor}:`);
      for (let i = 0; i <= valor; i++) {
          console.log(i);
      }
  } else {
      console.log("O valor introduzido não é superior a 10. Não será apresentada a listagem.");
  }
}

function Ex26() {
  
  let inicio = parseInt(prompt("Digite o valor inicial do intervalo:"));
  let fim = parseInt(prompt("Digite o valor final do intervalo:"));

  if (isNaN(inicio) || isNaN(fim) || inicio >= fim) {
      console.log("Por favor, digite um intervalo válido (valor inicial menor que valor final).");
      return;
  }

  console.log(`Números pares no intervalo de ${inicio} a ${fim}:`);
  for (let i = inicio; i <= fim; i++) {
      if (i % 2 === 0) {
          console.log(i);
      }
  }
}

function Ex27() {

  let valor = parseInt(prompt("Digite um valor par, inferior a 100:"));

  if (valor % 2 !== 0 || valor >= 100) {
      console.log("Por favor, digite um valor par, inferior a 100.");
      return;
  }

  console.log(`Inteiros múltiplos de 5 no intervalo de 0 a ${valor}:`);
  for (let i = 0; i <= valor; i++) {
      if (i % 5 === 0) {
          console.log(i);
      }
  }
}

function Ex28() {
  
  let n = parseInt(prompt("Digite o número de termos da sequência Fibonacci que deseja mostrar:"));

  if (isNaN(n) || n <= 0) {
      console.log("Por favor, digite um número inteiro positivo.");
      return;
  }

  if (n === 1) {
      console.log("Os primeiros 1 termo da sequência de Fibonacci:");
      console.log("0");
      return;
  }

  if (n === 2) {
      console.log("Os primeiros 2 termos da sequência de Fibonacci:");
      console.log("0");
      console.log("1");
      return;
  }

  let termo1 = 0;
  let termo2 = 1;

  console.log(`Os primeiros ${n} termos da sequência de Fibonacci:`);
  console.log(termo1);
  console.log(termo2); 

  for (let i = 3; i <= n; i++) {
      let proximoTermo = termo1 + termo2;
      console.log(proximoTermo);

      termo1 = termo2;
      termo2 = proximoTermo;
  }
}

function Ex29() {

  let dia = parseInt(prompt("Digite o dia:"));
  let mes = parseInt(prompt("Digite o mês (como número):"));
  let ano = parseInt(prompt("Digite o ano:"));

  if (isNaN(dia) || isNaN(mes) || isNaN(ano) || mes < 1 || mes > 12 || dia < 1) {
      console.log("Data inválida. Por favor, verifique os valores digitados.");
      return;
  }

  let diasNoMes = diasNoMesDoAno(mes, ano);
  if (dia > diasNoMes) {
      console.log("Data inválida. O dia não está dentro do intervalo válido para o mês e ano fornecidos.");
      return;
  }

  let diasRestantes = diasNoMes - dia;
  console.log(`Faltam ${diasRestantes} dia(s) para o fim do mês.`);

  function diasNoMesDoAno(mes, ano) {
      const diasPorMes = [31, (ehBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      return diasPorMes[mes - 1];
  }

  function ehBissexto(ano) {
      return (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0);
  }
}

Ex29();






