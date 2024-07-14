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
    const weightFloat = +height.replace(",","."); 
    const heightFloat = +weight.replace(",",".");
   

    const imcResults = (weightFloat / (heightFloat * heightFloat)).toFixed(1)
  
    setImc(imcResults)

    data.forEach((item)=> {
      if (imcResults >= item.min && imcResults <= item.max){
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    
    })
    if (!info) return;
  }

  const resetCalc =(e)=>{

    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("")
  }


  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");



  return (
    <div className="container">

      {!imc ? (<ImcCalc  calcImc={calcImc} />) : ( 
        <ImcTable data={data} 
                  imc={imc} 
                  info={info} 
                  infoClass={infoClass}
                  resetCalc={resetCalc}        
        /> )} 
      </div>



  )
}

export default App
