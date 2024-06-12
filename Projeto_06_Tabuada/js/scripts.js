// Seleção de elementos
 
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicatonTitle = document.querySelector("#multiplication-title span")
//Funções

const createTable = (number,inputMultiplication)=>{
    multiplicationTable.innerHTML=""

    for( i= 0; i<=inputMultiplication;i++){
       
        const result = number * i;
        // Criando o template para o HTML
        const template = `<div class="row">
            <div class="operation">${number} x ${i} =</div>
            <div class="result">${result}</div>
        
        </div>`
     
        // Transformando a template acima(string) em HTML
        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")

        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row)

    }

    multiplicatonTitle.innerText = number
}


//Eventos

multiplicationForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const inputNumber = +numberInput.value;
    const inputMultiplication = +multiplicationInput.value;
    //console.log("Criando uma validação caso não esteja prenchido qualquer um dos campos não será impresso os números")
    if(!inputNumber || !inputMultiplication) return;
     createTable(inputNumber,inputMultiplication)
    
   
})

