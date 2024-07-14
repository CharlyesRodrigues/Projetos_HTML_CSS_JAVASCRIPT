import "./Button.css"

const Button = ({id, text, action}) => {

const handleAction =(e)=>{

    action(e) // Action é uma função que esta vindo por
              // parâmetro da desestruturação de props
}

  return (
    <button id={id} onClick={handleAction} >{text}</button>
  )
}

export default Button