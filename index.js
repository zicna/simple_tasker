// * HTML constants
const  noteForm= document.getElementById("note-form")
const  noteSubmit= document.getElementById("note-submit")
const  noteAddNew= document.getElementById("note-add-new")
const noteTable = document.getElementById("note-table")

// *form constatns
const noteSubject = document.getElementById("note-subject")
const noteBody = document.getElementById("note-body")
const noteDate = document.getElementById("note-date")

// * instances from classes


// * callbacks from events
const handleNoteAddNew = () => {
    noteForm.style.display = "block"
    noteAddNew.style.display = "none"
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
        // debugger
    const note = new Note(noteS, noteB, noteD)
        console.log(note)
    // Storage.saveNote(note)
    }

}


// * Events
window.addEventListener("DOMContentLoaded", () => {
    UI.displayNotes()
})
noteAddNew.addEventListener("click", handleNoteAddNew)
noteForm.addEventListener("submit", handleSubmit)