class calcular {
    constructor(){
        let altura = document.querySelector('#altura');
        let peso = document.querySelector('#peso');
        let btn = document.querySelector('#btn');
        let res = document.querySelector('#res');
    }
    calculo(){
        btn.addEventListener('click',()=>{
            if(altura.value == '' || peso.value == ''){
                alert("Digite numero nos dois campos para fazer o calculo")
            }else{
               let calc = peso.value / (altura.value * altura.value);
                 if(calc < 18.6){
                  res.style.color="red";
                  res.innerText = `Resultado: ${calc.toFixed(1)} \n Voce Esta Abaixo do peso. `
                 }
                else if(calc >= 18.6 && calc <= 24.9){
                res.style.color="green";
                res.innerText = `Resultado: ${calc.toFixed(1)} \n Voce Esta No peso Ideal.`;
               }
               else if(calc > 25 && calc <= 29.9){
                res.style.color="yellow";
                res.innerText = `Resultado: ${calc.toFixed(1)} \n Voce Esta Com Sobrepeso.`;
               }
               else if(calc > 30 && calc <= 34.9){
                res.style.color="orange";
                res.innerText = `Resultado: (${calc.toFixed(1)}) \n Voce Esta Com Obesidadee Grau 1.`;
               }
               else if(calc > 35 && calc <= 39.9){
                res.style.color="white";
                res.innerText = `Resultado: (${calc.toFixed(1)}) \n Voce Esta Obesidade Grau 2.`;
               }
               else{
                res.style.color="red";
                res.innerText = `Resultado: (${calc.toFixed(1)}) \n Voce Esta com obesidade Mórbida`
               }
               if(calc != ""){
                   altura.value="";
                   peso.value="";
               }
            }   
        })
    }
}

const Calcular = new calcular();
Calcular.calculo();