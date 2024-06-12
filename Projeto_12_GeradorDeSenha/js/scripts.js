//Seleção de Elementos 


const name = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")




//Elementos gerador de senha
const generatePasswordButton= document.querySelector("#generate-password")
const generatedPasswordElement= document.querySelector("#generated-password")


//Novas Funcionalidades

const openCloseGeneratorButton = document.querySelector("#open-generate-password")
const generatePasswordContainer = document.querySelector("#generate-options")
const lenghtInput = document.querySelector("#lenght")
const lettersInput = document.querySelector("#letters")
const numbersInputs = document.querySelector("#numbers")
const symbolsInputs = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy-password")



//Funções 
//Letras, Números e Símbolos

//*****  Observação Utilizar a tabela ASCI ,aonde + 97 representa o inicio das letras minúsculas
// e o + 65 inicio das letras maiúsculas  ***************/
const getLetterLowerCase = ()=> {
return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

}


const getLetterUpperCase = ()=> {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    
    }

    const getNumber = ()=> {
        return Math.floor(Math.random() * 10).toString()
        
        }

//******Para criação de símbolos utilizei um array ****/
        const getSymbol =()=>{

            const symbols ="(){}[]=<>/;:!@#$%&*+-*,\|~^?"
         return symbols[Math.floor(Math.random() * symbols.length)]
        }


        //******* Função que junta tudo e cria a senha ********/

const generatePassword = (getLetterLowerCase,getLetterUpperCase,getNumber,getSymbol)=>{

        let password = ""

        // Segunda Versão
        const passwordLenght = lenghtInput.value

      const generators=[];

      if(lettersInput.checked){

        generators.push(getLetterUpperCase,getLetterLowerCase)
      }

      if(numbersInputs.checked){

        generators.push(getNumber)
      }
      
      
      if(symbolsInputs.checked){

        generators.push(getSymbol)
      }
      // console.log(generators.length)
      if(generators.length === 0){

        return alert("Escolha algum caracter");
      }

     
      
      /**  Versão anterior 
         * const generators = [


            getLetterLowerCase,
            getLetterUpperCase,
            getNumber,
            getSymbol
         ]
            */
        
                     //Na parte do generators ele colocou i + 4 .
        for(i = 0; i < passwordLenght ; i = i + generators.length){
            generators.forEach(()=>{

                const ramdomValue = generators[Math.floor(Math.random() * generators.length)]();

              password += ramdomValue;
            })          
        }
        password = password.slice(0, passwordLenght) // Estava gerando a senha com 12 e nesse comando limitei a 10 
        generatedPasswordElement.style.display = "block" // Fez o display do css aparecer
        generatedPasswordElement.querySelector("h4").innerText = password  // fez com que a senha fosse mostrada no campo do display

}


//Eventos



generatePasswordButton.addEventListener("click", ()=>{

    generatePassword(   getLetterLowerCase,
                        getLetterUpperCase,
                        getNumber,
                        getSymbol)

})

openCloseGeneratorButton.addEventListener("click" , ()=>{


    generatePasswordContainer.classList.toggle("hide")// toggle faz aparecer ou desaparcer o container
})

copyPasswordButton.addEventListener("click" , (e)=>{

  e.preventDefault();
  const password = generatedPasswordElement.querySelector("h4").innerText
  //Comando que faz a copia de um elemento
  
  navigator.clipboard.writeText(password).then(()=>{

    copyPasswordButton.innerText = "Senha copiada com Sucesso"

    setTimeout(()=>{
      copyPasswordButton.innerText = "Copiar"
    },1000)
  })

  
})