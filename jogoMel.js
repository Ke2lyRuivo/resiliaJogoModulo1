function melF1() {
    var fase1 = prompt("Escolha entre as opções 1 ou 2");
      if (fase1 == 1) {
        alert(
            "Yeah! Você ajudou a Mel a fazer a escolha correta."
        );
        location.replace("mel1.html"); //Fase 2 do Gabriel
      } else if (fase1 == 2) {
        alert(
            "Que pena! É melhor rever suas atitudes."
        );
        location.replace("loss.html"); //Loss
      } else {
        alert("Digite 1 ou 2");
        melF1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
    }
    }
    
    function melF2() {
      var fase2 = prompt("Escolha entre as opções 1 ou 2");
      if (fase2 == 1) {
        alert(
            "Yeah! Você ajudou a Mel a fazer a escolha correta."
        );
        location.replace("mel2.html");
      } else if (fase2 == 2) {
        alert(
            "Que pena! É melhor rever suas atitudes."
        );
        location.replace("loss.html"); //Loss
      } else {
        alert("Digite 1 ou 2");
        melF1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
      }
    }
    
    function melF3() {
        var fase3 = prompt("Escolha entre as opções 1 ou 2");
        if (fase3 == 1) {
          alert(
            "Yeah! Você ajudou a Mel a fazer a escolha correta."
          );
          location.replace("win.html");
        } else if (fase3 == 2) {
          alert(
            "Que pena! É melhor rever suas atitudes."
          );
          location.replace("loss.html");
        } else {
          alert("Digite 1 ou 2");
          MelF1(); // ele vai chamar a função novamente caso digite um número inválido ou letra ou nulo.
        }
      }
      function inicioPagina() {
        location.replace("../jogo.html");
      }