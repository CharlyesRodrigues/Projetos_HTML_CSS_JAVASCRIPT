import { useState } from "react"
import Button from "./Button"
import "./ImcCalc.css"

export const ImcCalc = () => {

const[height, setHeight] = useState("");
const[weight, setWeight] = useState("");

const clearForm = (e)=>{

    e.preventDefault();
    setHeight("");
    setWeight("")
}



// **** Validando os campos
// O bloco abaixo foi criado para auxiliar na validaçao dos campos do input

const validDigits = (text) =>{

    return text.replace(/[^0-9,]/g,"")
}



const handleHeightChange = (e)=>{
    
    const updatedValue = validDigits(e.target.value)
    setHeight(updatedValue )

    /*
     setHeight(validDigits(e.target.value)) outra forma de fazer 
     o código acima e aainda têm a terceira que podemos chamar direto 
     no onchange
    */
}


const handleWeightChange = (e)=>{
    
    const updatedValue = validDigits(e.target.value)
    setWeight(updatedValue )

    /*
     setHeight(validDigits(e.target.value)) outra forma de fazer 
     o código acima e aainda têm a terceira que podemos chamar direto 
     no onchange
    */

}
    return (
        <div className="calc-container">
            <h2>Calculadora de IMC</h2>
            
            <form id="imc-form">              
                
                <div className="form-inputs">
                    
                    <div className="form-control">
                        <label htmlFor="height">Altura:</label>
                        <input type="text" 
                               name="height" 
                               id="height"
                               placeholder="Exemplo 1,75"
                               onChange={handleHeightChange}
                               value={height}
                         />

                    </div>
                    

                    <div className="form-control">
                        <label htmlFor="weight">Peso:</label>
                        <input type="numerico" 
                               name="weight" 
                               id="weight"
                               placeholder="Exemplo 70,5 "
                               onChange={(e)=> handleWeightChange(e)}
                               value={weight}
                         />

                    </div>

                </div>

                {/**Abaixo temos o form  que será chamado após o prenchimento acima */}

                <div className="action-control">
                    <Button id="calc-btn" text ="Calcular" />
                    <Button id="clear-btn" text ="Limpar" action={clearForm}/>
                </div>


            </form>



        </div>
    )
}
