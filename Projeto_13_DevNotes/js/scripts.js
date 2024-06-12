//Elementos
const notesContainer = document.querySelector("#notes-container")
const noteInput = document.querySelector("#note-content")
const addNoteBtn = document.querySelector(".add-note")





//Funções

function showNotes(){
    getNotes().forEach((note)=>{


        const noteElement = createNote(note.id, note.content, note.fixed)

        notesContainer.appendChild(noteElement)
    })

}

function addNote(){

    const note = getNotes()

    const noteObject ={

        id:generatedId() ,
        content: noteInput.value,
        fixed:false,
    }
    const noteElement = createNote(noteObject.id,noteObject.content);

    notesContainer.appendChild(noteElement)
    note.push(noteObject)
    setNotes(note)
    noteInput.value =""
    
}




function generatedId(){


    return Math.floor(Math.random() * 5000)//Ele gera um id ramdomico até o 5000
}

// criando a função com os elementos na dom

function createNote(id, content, fixed){

const element = document.createElement("div")

element.classList.add("note")

const textarea = document.createElement("textarea")

textarea.value = content

textarea.placeholder ="Adicione algum texto"

element.appendChild(textarea)

return element

}
/*****************Elementos criados ************************/


/** LOCAL STORAGE FUNÇÕES */


function setNotes(notes){

    localStorage.setItem("notes" ,JSON.stringify(notes))
}


function getNotes(){

    // Transformando em arrays de objetos em javascript
        // json.parse
    const notes = JSON.parse(localStorage.getItem("notes") || "[]")
    
    return notes
}

  

//Eventos

addNoteBtn.addEventListener("click" , ()=> addNote())

//Inicialização para dar o start na aplicação


showNotes()