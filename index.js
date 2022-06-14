// * HTML constants
const  noteForm= document.getElementById("note-form")
const  noteSubmit= document.getElementById("note-submit")
const  noteCancel= document.getElementById("note-cancel")
const  noteAddNew= document.getElementById("note-add-new")
const noteTable = document.getElementById("note-table")
const noteList = document.querySelector('#note-list')

// *form constatns
const noteSubject = document.getElementById("note-subject")
const noteBody = document.getElementById("note-body")
const noteDate = document.getElementById("note-date")

// * instances from classes



const handleAddNew = () => {
    noteForm.style.display = "block"
    noteAddNew.style.display = "none"
}

const handleCancel = () => {
    noteForm.style.display = "none"
    noteAddNew.style.display = "block"
}

const handleSubmit = (event) => {
    event.preventDefault()
    noteForm.style.display = "none"
    noteAddNew.style.display = "block"

    const noteS = noteSubject.value
    const noteB = noteBody.value
    const noteD = noteDate.value

    if(noteS === "" || noteB === "" || noteD ===""){
        Promps.worning()
    } else {
    const note = new Note(noteS, noteB, noteD)
    Storage.addNote(note)
    UI.addNotesToLIst(note)
    }
    event.target.reset()
}



// * Event Listeners
document.addEventListener("DOMContentLoaded", UI.displayNotes)
noteAddNew.addEventListener("click", handleAddNew)
noteForm.addEventListener("submit", handleSubmit)

// *adding event listener for whole '#note-list' 
noteList.addEventListener('click', (event)=> {
    // * first we need to check what is clicked
    // * second remove from UI
    // * third remove book from localeStorage
    // event.target.classList.contains("btn-danger")
    UI.removeNote(event.target)
    Storage.removeNote(event.target)

})

noteCancel.addEventListener("click", handleCancel);

// * Warning to users that refreshing or closing simple note will result in losing data


