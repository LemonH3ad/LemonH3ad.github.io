const peso = document.getElementById("kilos");
const altura = document.getElementById("centimetros");
const edad = document.getElementById("anos");
const buttonxd = document.getElementById("boton");
const sexo =  document.getElementsByName("sexo");

const man = document.getElementById("man");
const fem = document.getElementById("fem");

const resultado = document.getElementById("resultadoFinal")

//radio vars
const nulo = document.getElementById("nulo");
const ligero = document.getElementById("ligero");
const moderado = document.getElementById("moderado");
const intenso = document.getElementById("intenso");
const hardcore = document.getElementById("hardcore");

const pgrasa = document.getElementById("grasa");
const gmasa =  document.getElementById("masa");
const mant = document.getElementById("mantener");

buttonxd.addEventListener('click', calcular);

function calcular (buttonxd){
    const valKG = parseFloat (peso.value);
    const valCM = parseFloat (altura.value);
    const valAge = parseFloat (edad.value);
    let paso1;
    let paso2;
    let paso3;
    let metbasal = 0;
    

    paso1 = 10 *valKG;
    paso2 = 6.25 * valCM;
    paso3 = 5*valAge;
    metbasal = paso1+paso2-paso3;

    if(man.checked){
        metbasal = metbasal+5;
    } else if(fem.checked){
        metbasal = metbasal-161
    }

    if(nulo.checked){
        metbasal = metbasal * 1.2;
    } else if(ligero.checked){
        metbasal = metbasal * 1.375;
    } else if(moderado.checked){
        metbasal = metbasal * 1.55;
    } else if(intenso.checked){
        metbasal = metbasal * 1.725;
    } else if (hardcore.checked){
        metbasal = metbasal * 1.9;
    }

    if(pgrasa.checked){
        metbasal = metbasal - 300;
    } else if(gmasa.checked){
        metbasal = metbasal + 300;
    } else if(mant.checked){
        metbasal = metbasal
    }
    if(nulo.checked || ligero.checked || moderado.checked || intenso.checked || hardcore.checked && pgrasa.checked || gmasa.checked || mant.checked && man.checked || fem.checked){
        resultado.innerText = "Su consumo de calorias aproximado es de " + metbasal;
    } else{
        resultado.innerText = "Complete los campos"
    }
    
}
