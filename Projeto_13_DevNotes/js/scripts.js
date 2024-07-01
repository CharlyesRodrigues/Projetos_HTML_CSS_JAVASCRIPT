//Elementos
const notesContainer = document.querySelector("#notes-container")
const noteInput = document.querySelector("#note-content")
const addNoteBtn = document.querySelector(".add-note")
const searchInput = document.querySelector("#search-input")
const exportBtn = document.querySelector("#export-notes")






//Funções

function showNotes(){
    cleanNotes()
    
    getNotes().forEach((note)=>{


        const noteElement = createNote(note.id, note.content, note.fixed)

        notesContainer.appendChild(noteElement)
    })

}

function cleanNotes (){

    notesContainer.replaceChildren([])
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
 
//Criando o ícone de fixar ícones

const pinIcon = document.createElement("i")

pinIcon.classList.add(...["bi","bi-pin"])

element.appendChild(pinIcon)

//Criando o ícone de deletar ícones

const deleteIcon = document.createElement("i")

deleteIcon.classList.add(...["bi","bi-x-lg"])

element.appendChild(deleteIcon)

//Criando o ícone de duplicar ícones

const duplicateIcon = document.createElement("i")

duplicateIcon.classList.add(...["bi","bi-file-earmark-plus"])

element.appendChild(duplicateIcon)


if (fixed) {

    element.classList.add("fixed")
}

//  EVENTOS DO ELEMENTO

element.querySelector("textarea").addEventListener("keyup" ,(e)=>{

const noteContent = e.target.value

updateNote(id,noteContent)

})

element.querySelector(".bi-pin").addEventListener("click", ()=>{

    toggleFixNote(id)
});

element.querySelector(".bi-x-lg").addEventListener("click", () => {
    deleteNote(id, element);
  });

  element.querySelector(".bi-file-earmark-plus").addEventListener("click", () => {
    copyNote(id);
  });


return element

}

exportBtn.addEventListener("click", (e)=>{

exportData();

})
/************************************************** */

function exportData(){

    // Recuperar os dados do localStorage
    const notes = getNotes()

    // Verificar se há dados
    if (!notes) {
      alert('Nenhum dado encontrado no localStorage!');
      return;
    }

    // Transformar os dados em um formato adequado para o Excel
    const worksheet = XLSX.utils.json_to_sheet(notes);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Gerar arquivo Excel
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Criar um blob e iniciar o download do arquivo
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'notes.xlsx';
    a.click();
    URL.revokeObjectURL(url);
}

function toggleFixNote(id){

    const notes = getNotes()
   
    const targetNote = notes.filter((z)=> z.id === id)[0]

    targetNote.fixed = !targetNote.fixed

    //console.log(notes)
    saveNotes(notes)

    showNotes()

}

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id !== id);
  
    saveNotes(notes);
  
    notesContainer.removeChild(element);
    
  };


  function copyNote (id){

    const notes = getNotes()

    const targerNote = notes.filter((note)=>  note.id  === id)[0]

    // criando um novo objeto com id diferente para ser copiado mas não fixado juntamente


    const noteObject = {
        id:generatedId(),
        content: targerNote.content,
        fixed: false,
    };
  // Criando o novo objeto que será a copia

   const noteElement = createNote(noteObject.id, noteObject.content , noteObject.fixed)
   notesContainer.appendChild(noteElement)
   notes.push(noteObject)
   saveNotes(notes)

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
    
    const orderedNotes = notes.sort ((a,b) => (a.fixed > b.fixed ? -1 :1));

    return orderedNotes
}

function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  

  function updateNote( id, newContent){
    const notes = getNotes()

    const targetNote = notes.filter((note)=> note.id === id)[0];
    targetNote.content = newContent;
    saveNotes(notes)

  }

function searchNotes(search){
    const searchResults = getNotes().filter((note)=>{

        return note.content.includes(search)
        //includes diz se o conteúdo inteiro esta presente em uma pequena fração de frase
    })
        if(search !==""){

            cleanNotes()
            searchResults.forEach((note)=>{

                const noteElement = createNote(note.id, note.content)
                notesContainer.appendChild(noteElement)
            })
            return;

        }

        cleanNotes();
        showNotes();
    
}

//Eventos

addNoteBtn.addEventListener("click" , ()=> addNote())

searchInput.addEventListener("keyup" , (e)=>{

    const search = e.target.value;
    searchNotes(search);
})

noteInput.addEventListener("keydown" , (e)=>{

if (e.key === "Enter"){

    addNote();
}

})

//Inicialização para dar o start na aplicação

showNotes()
