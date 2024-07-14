import { data } from './data/data'
import { useState } from 'react'
import { ImcCalc } from './components/ImcCalc'
import ImcTable from './components/ImcTable';
import './App.css'



function App() {

  const calcImc =(e,weight,height)=>{
    e.preventDefault();
   
    if ( !weight || !height) return;

    // Temos que trocar a vírgula por pontos para conseguirmos fazer a conta
    const heightFloat = +weight.replace(",",".");
    const weightFloat = +height.replace(",",".");    

    const imcResults = (weightFloat / (heightFloat * heightFloat)).toFixed(1)
  
    setImc(imcResults)
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");


  return (
    <div className="container">

      {!imc ? (<ImcCalc  calcImc={calcImc} />) : ( <ImcTable data={data} resultado={imc}/> )} </div>



  )
}

export default App
