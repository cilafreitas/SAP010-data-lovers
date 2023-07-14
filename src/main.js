import data from "./data/countries/countries.js";
import {filtro} from "./data.js"

//console.log(data.countries[0], data.countries[0].population);
function paises(array) {
  for (let i = 0; i < array.length; i++) {
    const exibirFlags = array[i].flags.png;
    const exibirName = array[i].name.common;
    const exibirPopulation = array[i].population;

    // template string
    const template = `
    <div class= "bandeiras">
    <img src ="${exibirFlags}">
    <h3>${exibirName}</h3>
    <p> População ${exibirPopulation}</p>
    </div>`;

    const exibirFlagsDiv = document.getElementById("exibirFlags");
    exibirFlagsDiv.innerHTML = exibirFlagsDiv.innerHTML + template;


    
    
    
    
  }
}

const filtroIdependecia = data.countries.filter(filtroPorIndependecia)

function filtroPorIndependecia(elemento){
  
  return elemento.independent === false

}



const filtrandoAfrica = data.countries.filter(filtroAfrica)
//console.log(filtrandoAfrica)
function filtroAfrica (elementos){
  
  return elementos.continents == "Africa"
}

const filtrandoAsia = data.countries.filter(filtroAsia)
//console.log(filtrandoAsia)
function filtroAsia (elementos){
  
  return elementos.continents == "Asia"
}

const filtrandoEuropa = data.countries.filter(filtroEuropa)
//console.log(filtrandoEuropa)
function filtroEuropa (elementos){
  
  return elementos.continents == "Europe"
}

const filtrandoOceania = data.countries.filter(filtroOceania)
//console.log(filtrandoOceania)
function filtroOceania (elementos){
  
  return elementos.continents == "Oceania"
}

const filtrandoAntartida = data.countries.filter(filtroAntartida)
//console.log(filtrandoAntartida)
function filtroAntartida (elementos){
  
  return elementos.continents == "Antarctica"
}

paises(data.countries);

 //inserir na manipulação de DOM

 const america = filtro(data.countries);
//const clicarNaAmerica = document.addEventListener("click", America)
//selecionarContinentes.innerHTML = america

function clicar(){
  const selecionarContinentes = document.addEventListener("select#continentes")
  
  selecionarContinentes.innerHTML = america
}

console.log(america)