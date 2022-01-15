function fase1() {
var fase1 = prompt("Escolha entre as opções 1 ou 2");
  if (fase1 == 1) {
    alert(
        "Yeah! Você ajudou o Gabriel a fazer a escolha correta."
    );
    location.replace("gabriel1.html"); //Fase 2 do Gabriel
  } else if (fase1 == 2) {
    alert(
        "Que pena! É bom rever suas atitudes."
    );
    location.replace("loss.html"); //Loss
  } else {
    alert("Digite 1 ou 2");
    fase1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
}
}

function fase2() {
  var fase2 = prompt("Escolha entre as opções 1 ou 2");
  if (fase2 == 1) {
    alert(
        "Yeah! Você ajudou o Gabriel a fazer a escolha correta."
    );
    location.replace("gabriel2.html");
  } else if (fase2 == 2) {
    alert(
        "Que pena! É bom rever suas atitudes."
    );
    location.replace("loss.html"); //Loss
  } else {
    alert("Digite 1 ou 2");
    fase1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
  }
}

function fase3() {
    var fase3 = prompt("Escolha entre as opções 1 ou 2");
    if (fase3 == 1) {
      alert(
        "Yeah! Você ajudou o Gabriel a fazer a escolha correta."
      );
      location.replace("win.html");
    } else if (fase3 == 2) {
      alert(
        "Que pena! É melhor rever suas atitudes."
      );
      location.replace("loss.html");
    } else {
      alert("Digite 1 ou 2");
      fase1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
    }
  }
  function inicioPagina() {
    location.replace("../jogo.html");
  }
    




/*
function cliqueAqui(resposta) {
    var resposta = prompt("Digite opção 1 ou 2")

    if (resposta == 1) {
        alert("Yeah! Você ajudou o Gabriel a fazer a escolha correta.");
    } else {
        alert("Que pena! É bom rever suas atitudes.");

    }

}
//var jogo1 = prompt ("Digite o número da opção correta")

/* 
Quais atitudes são sustentáveis para ajudar a salvar o planeta?
1. Fazer coleta seletiva para separação do material que pode ser reciclado.
1.1. Colocar o lixo seco junto com o úmido.
2. Fechar chuveiro/torneira para não disperdiçar água.
2.2. Deixar o chuveiro aberto enquanto passa sabonete.
3. Trocar as lâmpadas incandescentes por fluoresccentes ou de LED.
3.3. Deixar as luzes acessas o dia todo.
*/