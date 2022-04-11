const btn = document.getElementById('btn');

function imc (){
     const altura = document.getElementById('altura').value;
     const nome = document.getElementById('nome').value;
     const peso = document.getElementById('peso').value;
     const resultado = document.getElementById('resultado');

     if(nome.trim() !== '' && peso.trim() !== '' && altura.trim() !== ''){
        const IMC = peso/(altura*2)
        let classificacao =''

        if (IMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (IMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (IMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (IMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (IMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.innerHTML = `${nome} seu IMC é ${IMC.toFixed(2)} , e sua classificação é ${classificacao}`
     }else{
         resultado.innerHTML="Preencha os campos !"
     }


 }


btn.addEventListener('click', () => imc())