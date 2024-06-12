const container = document.querySelector(".container")
//Elemento botão
const qrCodeBtn = document.querySelector("#qr-form button")

//Elemento entrada de dados
const qrCodeInput = document.querySelector("#qr-form input")

//Elemento img
const qrCodeImg = document.querySelector("#qr-code img")
// Eventos
// Gerar QRCode
function generateQrCode(){
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;
    // Se a opção acima for preenchida e ao apertar o botão vai aparecer a mensagem "Gerando código"

    qrCodeBtn.innerText = "Gerando código ...."
    
    // Vamos chamar a api para img a seguir que esta no site => https://goqr.me/api/

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", ()=>{
        container.classList.add("active")
        qrCodeBtn.innerText = "Código Gerado"
    });
  

}
// Criando o evento ao clicar no botão
qrCodeBtn.addEventListener("click",()=>{

    generateQrCode();
})

// Criando evento quando o teclado enter é acionado(Observação sensitive Case,ou seja, o k de keydown é minúsculo)
qrCodeInput.addEventListener("keyup",(e)=>{
    if(e.code === "Enter"){
        generateQrCode();
    }
  
})  

//Limpar área do QRCODE

qrCodeInput.addEventListener("keyup",()=>{

    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerText = "Gerar QR Code"
    }
})