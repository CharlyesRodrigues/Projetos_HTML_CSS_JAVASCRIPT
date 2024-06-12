const buttons = document.querySelectorAll("#image-picker li")
const image =document.querySelector("#product-image")

buttons.forEach((btn)=>{

    btn.addEventListener("click", (e)=>{
        console.log(e)

        buttons.forEach((btn)=>{
            btn.querySelector('.color').classList.remove("selected");
        })

        const button =  e.target;
        const id = button.getAttribute("id")
        //console.log(id)
        button.querySelector(".color").classList.add("selected")
        image.classList.add("changing")

        image.setAttribute("src",`img/iphone_${id}.jpg`)//ele interpolou com o nome do arquivo que esta na pasta(img)

        setTimeout(()=>{
        //tirar essa linha de comando e observar no navegador a diferença da transição de cor do iphone
            image.classList.toggle("changing")
        },200)

    })
})