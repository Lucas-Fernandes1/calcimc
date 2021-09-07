const calcular = document.getElementById('calcular');

function imc() {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const result = document.getElementById('resultado');

  if (nome !== '' && altura !== '' && peso !== '') {

    const valorImc = (peso / (altura * altura)).toFixed(2);
    
    let classificacao = '';

    if (valorImc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (valorImc < 25 ) {
      classificacao = 'com peso ideal';
    } else if (valorImc < 30) {
      classificacao = 'acima do peso, cuide-se!';
    } else if (valorImc < 35) {
      classificacao = 'obesidade grau 1.';
    } else if (valorImc < 40) {
      classificacao = 'obesidade grau 2.';
    } else {
      classificacao = 'obseidade mórbida';
    }

    resultado.textContent = `Olá, ${nome}. Seu imc é ${valorImc},
    você está: ${classificacao}`;
    
  } else {
    resultado.textContent = 'Preencha todos os campos';
  }
}

calcular.addEventListener('click', imc);
