//) Elabore	um	programa	que	receba	a	nota	de	um	aluno	e	diga	se	o	mesmo	foi	aprovado	ou reprovado.	O	aluno	é	aprovado	com	nota	maior	ou	igual	a	6,0	(seis).
var aluno, n1, n2, n3, media;

//mensagem de abertura
  alert ("Cálculo de Média");
  alert("");

//antrada de dados do usuário
aluno = prompt ("Qual o nome do aluno(a): ");
n1 = parseFloat(prompt ("Insira a 1° nota: "));
n2 = parseFloat(prompt ("Insira a 2° nota: "));
n3 = parseFloat(prompt ("Insira a 3° nota: "));

//Cálculo de média do usuário
media = (n1 + n2 + n3) / 3
  alert ("Média " + media.toFixed(1));

// Condição if-else para saber se o aluno foi aprovado ou reprovado
if (media >= 6){
  alert ("Aluno(a) " + aluno + " aprovado(a) ");
}
  else {
    alert ("Aluno(a) " + aluno + " reprovado(a) ");
}