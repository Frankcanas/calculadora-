const botones = document.querySelectorAll('.btn');

const inputNum1 = document.getElementById('num1');
const inputOperador = document.getElementById('operador');
const inputNum2 = document.getElementById('num2');
const inputResultado = document.getElementById('resultado');

let escribiendoEnElSegundoNumero = false;

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent;


        if (boton.id === 'c') {
            inputNum1.value = "";
            inputOperador.value = "";
            inputNum2.value = "";
            inputResultado.value = "";
            escribiendoEnElSegundoNumero = false;
            return;
        }


        
        if (boton.id === 'borrar') {
            if (escribiendoEnElSegundoNumero === false) {
                
                inputNum1.value = inputNum1.value.slice(0, -1);
            } else {
                
                if (inputNum2.value === "") {
                    inputOperador.value = "";
                    escribiendoEnElSegundoNumero = false;
                } else {
                    inputNum2.value = inputNum2.value.slice(0, -1);
                }
            }
            return;
        }


        if (boton.id === 'igual') {
            const n1 = parseFloat(inputNum1.value);
            const n2 = parseFloat(inputNum2.value);
            const op = inputOperador.value;
            let final = 0;

            if (op === '+') final = n1 + n2;
            if (op === '-') final = n1 - n2;
            if (op === '*') final = n1 * n2;
            if (op === '/') final = n1 / n2;

            inputResultado.value = final;
            return;
        }


        if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
            if (inputNum1.value !== "") {
                inputOperador.value = valor;
                escribiendoEnElSegundoNumero = true;
            }
            return;
        }


        if (escribiendoEnElSegundoNumero === false) {
            inputNum1.value = inputNum1.value + valor;
        } else {
            inputNum2.value = inputNum2.value + valor;
        }
    });
});